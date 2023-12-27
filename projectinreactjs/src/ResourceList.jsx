import React from "react";
import ResourceListFiltered from "./ResourceListFiltered.jsx";
import ResourceListUnfiltered from "./ResourceListUnfiltered.jsx";

import './resourcestyles.css'

export default function ResourceList ({list, changeFavourite, deleteItemById, filterState}) {

return (
    <div>
      <h1 className="section-title">Your lessons and learnings: </h1>
      {filterState ? (<ResourceListFiltered list={list} changeFavourite={changeFavourite} deleteItemById={deleteItemById}/>) 
      : (<ResourceListUnfiltered list={list} changeFavourite={changeFavourite} deleteItemById={deleteItemById}/> )}
      </div>
  );
}