import { describe, expect, it } from "vitest";
import { AGE_GATE_STORAGE_KEY, hasAgeGateApproval, recordAgeGateApproval } from "./ageGate";

function createStorage(initialValue?: string): Storage {
  const values = new Map<string, string>();

  if (initialValue !== undefined) {
    values.set(AGE_GATE_STORAGE_KEY, initialValue);
  }

  return {
    get length() {
      return values.size;
    },
    clear: () => values.clear(),
    getItem: (key: string) => values.get(key) ?? null,
    key: (index: number) => Array.from(values.keys())[index] ?? null,
    removeItem: (key: string) => values.delete(key),
    setItem: (key: string, value: string) => values.set(key, value)
  };
}

describe("age gate helpers", () => {
  it("returns false when storage has no approval", () => {
    expect(hasAgeGateApproval(createStorage())).toBe(false);
  });

  it("returns true when storage contains approval", () => {
    expect(hasAgeGateApproval(createStorage("true"))).toBe(true);
  });

  it("records approval in storage", () => {
    const storage = createStorage();

    recordAgeGateApproval(storage);

    expect(storage.getItem(AGE_GATE_STORAGE_KEY)).toBe("true");
  });
});

