import React from "react";
import Resource from "./Resource.jsx";
import TableHeadings from "./TableHeadings.jsx";
export default function ResourceListUniltered ({list, changeFavourite, deleteItemById}) {
    return (<>

        {(list.filter(resource => resource.favourite === false).length) ===0 && "Ok, we get it. You're perfect."}
        <div className = "your-resource-table">

            {/* Display favourites if they exist */}
            {(list.length) !==0 && <TableHeadings/>}
                {list.map((resource) =><Resource key={resource.id} resource={resource} value={true} changeFavourite={changeFavourite} deleteItemById={deleteItemById} ></Resource>)
                }

            </div>    
        </>
    )
}