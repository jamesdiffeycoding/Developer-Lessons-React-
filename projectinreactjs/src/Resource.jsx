import React from "react";

export default function Resource ({resource, value, defaultChecked, onClick, changeFavourite, deleteItemById}) {
    
    // Link validation
    let isLinkValid = false;
    function checkValidLink (){
        if (resource.link.includes("http")){
            isLinkValid = true; } return; }
    checkValidLink();


return (
    <>
        <div key={resource.id} className="list-row">
            <div className="name">
            {isLinkValid ?
                (<a href={resource.link} className="name-item"> {resource.description} </a>)
                : (<a className="name-item"> {resource.description} </a>)
            }
            </div>
            <div className="information">
                <a className="information-item">{resource.information} </a>
            </div>
            <div className="name">
                <input type="checkbox" value={value} className="favourite-item" defaultChecked={resource.favourite} onClick={()=>changeFavourite(resource.id, resource.favourite)}></input>            
            </div>
            <div className="name">
                <button className="delete-item" onClick={()=>{deleteItemById(resource.id)}}>X</button>
            </div>
        </div>
    </>
    )
}