import React from "react";
import Resource from "./Resource";
import TableHeadings from "./TableHeadings";
export default function ResourceListUniltered ({list, changeFavourite, deleteItemById}) {
    return (<>

    {list.length === 0 && "You have no resources listed here. Are you being too picky?"}
        {list.length === 0 && "You have no resources listed here. Are you being too picky?"}
        <div className = "your-resource-table">

            {/* Display favourites if they exist */}
            {(list.length) !==0 && <TableHeadings/>}
            {(list.length) ===0 && "You have no resources listed here. Are you being too picky?"}
                {list.map((resource) =><Resource key={resource.id} resource={resource} value={true} changeFavourite={changeFavourite} deleteItemById={deleteItemById} ></Resource>)
                }

            </div>    
        </>
    )
}