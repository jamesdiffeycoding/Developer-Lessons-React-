import React from "react"
export default function NewResourceForm({ addResource }){

    const [item, setItem]= React.useState("")
    const [info, setInfo]= React.useState("")
    const [link, setLink]= React.useState("")


    function handleSubmit (event) {
        event.preventDefault();
        if (item =="") {return;}
        addResource(item, info, link);
    }

    return (<>
    <h1 className="section-title">Add a new learning</h1>
      {/* FORM */}
    <form className="form-input">
        <label htmlFor='newresource' className="form-input-pair">Source / Event / Trigger
            <p> <textarea type="text" rows="4" cols="40" value={item} id="newresource" className="resizable-textarea" placeholder="e.g. 'Stack Overflow', 'that client meeting' or 'the check-in with Lisa about her promotion'" onChange={e => setItem(e.target.value)}></textarea> </p>
        </label>
        <label htmlFor='newresourcedescription' className="form-input-pair">Key learning
            <p> <textarea rows="4" cols="40" value={info} id="newresourcedescription" className="resizable-textarea" placeholder="e.g. 'using modular code to improve reusability, or 'remembering it's all about the user'" onChange={e => setInfo(e.target.value)}></textarea> </p>
        </label>
        <label htmlFor='newresourcelink' className="form-input-pair">Link (if relevant)
            <p> <textarea rows="2" cols="40" value={link} id="newresourcelink" placeholder="https://www.google.com" className="resizable-textarea" onChange={e => setLink(e.target.value)}></textarea> </p>
        </label>
        <button onClick={function() {handleSubmit(event)}} className="submit">Submit</button>
    </form>
    </>
        )
    }