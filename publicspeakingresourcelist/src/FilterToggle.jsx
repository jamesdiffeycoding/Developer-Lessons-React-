import React from "react";


export default function FilterToggle ({toggleFilter}) {
    return <>
    <div className="setting-toggle">
        <label htmlFor="filter" className="setting-toggle-label">Separate favourites
            <input type="checkbox" id="filter" onClick={() => toggleFilter()}>
            </input>
        </label>
    </div>
</>
}