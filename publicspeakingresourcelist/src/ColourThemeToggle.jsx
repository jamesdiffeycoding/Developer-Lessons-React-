import React from "react";

export default function ColourThemeToggle ({toggleColourTheme}) {
    return <>
        <div className="setting-toggle">
            <label htmlFor="colour-theme" className="setting-toggle-label">Toggle background
                <input type="checkbox" id="colour-theme"  className="settings-inputs" onClick={() => toggleColourTheme()}>
                </input>
            </label>
        </div>
    </>
}