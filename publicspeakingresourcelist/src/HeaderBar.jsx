import React from "react";
import FilterToggle from "./FilterToggle";
import ColourThemeToggle from "./ColourThemeToggle";

export default function HeaderBar ({toggleFilter, toggleColourTheme}) {

    const [displaySettings, setDisplaySettings] = React.useState(false)
    function toggleSettingsDisplay() {setDisplaySettings(displaySettings => !displaySettings)}

    return (<>

    <div className="settings-container">
    <h1>Resources for Developers</h1>
    <button className="settings-block" onClick={(toggleSettingsDisplay)}><img src="../settings.png" className="settings-cog" alt="settings-icon"></img>
    <div style={{display: displaySettings ? 'inline' : 'none'}}>
        <FilterToggle toggleFilter={toggleFilter}/>
        <ColourThemeToggle toggleColourTheme={toggleColourTheme}/>
    </div>
    </button>
    </div>
    <p className="tagline">A place to store the lessons you want to remember...</p>
    </>
    )
    
}