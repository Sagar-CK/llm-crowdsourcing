import React from "react";
import "./layout.css";
import TUDLogo from "../resources/TUDelft_logo_black.png";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <nav className="nav-bar">
        <img className="tud-logo" src={TUDLogo} alt="TU Delft" />
        <button className="revoke-consent-btn" onClick={
            () => {
                // ensure the user wants to revoke consent
                if (window.confirm("Are you sure you want to withdraw consent?")) {
                    // Redirect to the revoked consent page
                    navigate("/revoked-consent");
                }
            }
            
        }>
          Withdraw Consent
        </button>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
