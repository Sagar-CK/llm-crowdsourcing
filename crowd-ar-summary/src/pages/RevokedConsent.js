import React from "react";
import "./revokedconsent.css";

const RevokedConsent = () => {

  return (
    <div id="consent-container">
      <h1>Consent Revoked</h1>
      <p>
        We have taken note of your revoked consent. Your data collected so far
        will be discarded and any time spent will be compensated on Prolific.
      </p>
      <p>
        You can close this window now. If you have any questions, please contact us through the Prolific platform.
      </p>
    </div>
  );
};

export default RevokedConsent;
