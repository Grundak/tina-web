export const AGE_GATE_STORAGE_KEY = "tina-web-age-approved";

export function hasAgeGateApproval(storage: Pick<Storage, "getItem">): boolean {
  return storage.getItem(AGE_GATE_STORAGE_KEY) === "true";
}

export function recordAgeGateApproval(storage: Pick<Storage, "setItem">): void {
  storage.setItem(AGE_GATE_STORAGE_KEY, "true");
}

