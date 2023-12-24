import React from "react"
import Resource from "./Resource";
export default function NewResourceForm({ addResource }){

    const [item, setItem]= React.useState("Apples")
    const [info, setInfo]= React.useState("red")
    const [link, setLink]= React.useState("youtube.com")


    function handleSubmit (event) {
        event.preventDefault();
        if (item =="") {return;}
        addResource(item, info, link);
    }

    return (<>
    <h3>Form input</h3>
      {/* FORM */}
    <form className="form-input">
        <label htmlFor='newresource'>Name
            <p> <input type="text" size="15" value={item} id="newresource" onChange={e => setItem(e.target.value)}></input> </p>
        </label>
        <label htmlFor='newresourcedescription'>Key takeaway
            <p> <input type="text" size="20" value={info} id="newresourcedescription" onChange={e => setInfo(e.target.value)}></input> </p>
        </label>
        <label htmlFor='newresourcedescription'>Link
            <p> <input type="text" size="15" value={link} id="newresourcedescription" onChange={e => setLink(e.target.value)}></input> </p>
        </label>
        <button onClick={function() {handleSubmit(event)}} className="submit">Submit</button>
    </form>
    </>
        )
    }