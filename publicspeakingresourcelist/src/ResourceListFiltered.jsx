import React from "react";
import Resource from "./Resource";
import TableHeadings from "./TableHeadings";
export default function ResourceListFiltered ({list, changeFavourite, deleteItemById}) {
    return (<>

    {list.length === 0 && "You have no resources listed here. Are you being too picky?"}
        {list.length === 0 && "You have no resources listed here. Are you being too picky?"}
        <div className = "your-resources">
            <div className="your-resource-table">

            {/* Display favourites if they exist */}
            <h3 className="favourite-banner">Favourites</h3>
            {(list.filter(resource => resource.favourite === true).length) !==0 && <TableHeadings/>}
            {(list.filter(resource => resource.favourite === true).length) ===0 && "You have no resources listed here. Are you being too picky?"}
                {list.map((resource) => resource.favourite ? 
                (<Resource key={resource.id} resource={resource} value={true} changeFavourite={changeFavourite} deleteItemById={deleteItemById} ></Resource>) : (<h1></h1>)
                )}
            </div>
            <div className="your-resource-table">
            {/* Display non-favourited resources if they exist */}
            <h3 className="favourite-banner">Non-favourites</h3>
            {(list.filter(resource => resource.favourite === false).length) !==0 && <TableHeadings/>}
            {(list.filter(resource => resource.favourite === false).length) ===0 && "You have no resources listed here. Are you being too picky?"}
            {list.map((resource) => !resource.favourite ? 
                (<Resource key={resource.id} resource={resource} value={true} changeFavourite={changeFavourite} deleteItemById={deleteItemById} ></Resource>) : (<div></div>)
            )}
            </div>
            </div>    
        </>
    )
}