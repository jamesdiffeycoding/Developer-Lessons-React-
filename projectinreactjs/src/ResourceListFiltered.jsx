import React from "react";
import Resource from "./Resource.jsx";
import TableHeadings from "./TableHeadings.jsx";
export default function ResourceListFiltered ({list, changeFavourite, deleteItemById}) {
    return (<>

        {list.length === 0 && "You have no lessons listed here. Are you being too picky?"}
        <div className = "your-resources">
            {/* Display favourites if they exist */}
            <h3 className="favourite-banner">Favourites</h3>
            {(list.filter(resource => resource.favourite === true).length) !==0 && <TableHeadings/>}
            {(list.filter(resource => resource.favourite === true).length) ===0 && "You really don't have any favourite lessons?"}
            {list.map((resource) => resource.favourite ? 
            (<Resource key={resource.id} resource={resource} value={true} changeFavourite={changeFavourite} deleteItemById={deleteItemById} ></Resource>) : (<span></span>)
            )}


            {/* Display non-favourited resources if they exist */}
            <h3 className="favourite-banner">Other important ones</h3>
            {(list.filter(resource => resource.favourite === false).length) !==0 && <TableHeadings/>}
            {(list.filter(resource => resource.favourite === false).length) ===0 && "Ok, we get it. You're perfect."}
            {list.map((resource) => !resource.favourite ? 
                (<Resource key={resource.id} resource={resource} value={true} changeFavourite={changeFavourite} deleteItemById={deleteItemById} ></Resource>) : (<span></span>)
            )}
            </div>    
        </>
    )
}