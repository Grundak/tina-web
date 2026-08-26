"use client";

import { useEffect, useState } from "react";
import { hasAgeGateApproval, recordAgeGateApproval } from "@/lib/ageGate";

type AgeGateProps = {
  children: React.ReactNode;
};

export function AgeGate({ children }: AgeGateProps) {
  const [isApproved, setIsApproved] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    setIsApproved(hasAgeGateApproval(window.localStorage));
    setHasChecked(true);
  }, []);

  function enterSite() {
    recordAgeGateApproval(window.localStorage);
    setIsApproved(true);
  }

  function exitSite() {
    window.location.href = "https://www.google.com";
  }

  if (!hasChecked) {
    return null;
  }

  if (!isApproved) {
    return (
      <div className="ageGate" role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
        <section className="ageGateCard">
          <div className="ageGateMark">18+</div>
          <p className="eyebrow">Mature content warning</p>
          <h1 id="age-gate-title">Adults only.</h1>
          <p>
            This portfolio is intended for adults and may reference BDSM-oriented themes. By entering,
            you confirm that you are at least 18 years old and allowed to view mature content in your
            location.
          </p>
          <div className="buttonRow">
            <button className="button buttonPrimary" type="button" onClick={enterSite}>
              I am 18+ - Enter
            </button>
            <button className="button" type="button" onClick={exitSite}>
              Exit
            </button>
          </div>
        </section>
      </div>
    );
  }

  return children;
}

