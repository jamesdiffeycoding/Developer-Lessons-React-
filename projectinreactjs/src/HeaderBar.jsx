import React from "react";
import FilterToggle from "./FilterToggle.jsx";
import ColourThemeToggle from "./ColourThemeToggle.jsx";

export default function HeaderBar ({toggleFilter, toggleColourTheme}) {

    const [displaySettings, setDisplaySettings] = React.useState(false)
    function toggleSettingsDisplay() {setDisplaySettings(displaySettings => !displaySettings)}

    return (<>

    <div className="settings-container">
    <h1>Lessons and learnings I want to remember...</h1>
    <button className="settings-block" onClick={(toggleSettingsDisplay)}><img src="../settings.png" className="settings-cog" alt="settings-icon"></img>
    <div style={{display: displaySettings ? 'inline' : 'none'}}>
        <FilterToggle toggleFilter={toggleFilter}/>
        <ColourThemeToggle toggleColourTheme={toggleColourTheme}/>
    </div>
    </button>
    </div>
    <p className="header-tagline">A place to record important things.</p>
    </>
    )
    
}