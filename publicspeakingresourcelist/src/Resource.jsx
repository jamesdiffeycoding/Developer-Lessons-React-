import React from "react";

export default function Resource ({resource, value, defaultChecked, onClick, changeFavourite, deleteItemById}) {
    

return (
    <>
        <div key={resource.id} className="list-row">
            <a href={resource.link} className="name"> DESC{resource.description} </a>
            <p className="informatino"> INFO: {resource.information} </p>
            <input type="checkbox" value={value} className="favourite" defaultChecked={resource.favourite} onClick={()=>changeFavourite(resource.id, resource.favourite)}></input>

            <button className="delete" onClick={()=>{deleteItemById(resource.id)}}>X</button>
        </div>
    </>
    )
}