import React, { useState } from "react";
const Listinput = ({insert}) => {
    const [entry, setEntry] = useState("")
    const [title, setTitle] = useState("")
    return (
        <>
            <div className="card w-50">
                <h2>To-do App</h2>
                <input type="text" onChange={(i) => setTitle(i.target.value)} className="form control my-2" value={title} placeholder="Input entry title" />
                <input type="text" onChange={(i) => setEntry(i.target.value)} className="form control my-2" value={entry} placeholder="Input new entry" />
                <button className={"btn btn-success my-2 w-25"} onClick={()=>insert({entry, title})}>Add entry</button>
            </div>
        </>
    )
}
export default Listinput