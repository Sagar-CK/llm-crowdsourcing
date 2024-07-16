import React from 'react';

const RevokedConsent = () => {
    const handleClose = () => {
        window.close();
    };

    return (
        <div>
            <h1>Consent Revoked</h1>
            <p>Your consent has been revoked.</p>
            <button onClick={handleClose}>Close</button>
        </div>
    );
};

export default RevokedConsent;