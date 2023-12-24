import React from "react";
import Resource from "./Resource";
import ResourceListFiltered from "./ResourceListFiltered";
import ResourceListUnfiltered from "./ResourceListUnfiltered";


export default function ResourceList ({list, changeFavourite, deleteItemById, filterState}) {
console.log(list)
    

return (
    <div>
      <h3>Your resources: </h3>


      {filterState ? (<ResourceListFiltered list={list} changeFavourite={changeFavourite} deleteItemById={deleteItemById}/>) 
      : (<ResourceListUnfiltered list={list} changeFavourite={changeFavourite} deleteItemById={deleteItemById}/> )}
      
      </div>
  );
}