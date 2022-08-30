import React from "react";
const Display = ({todo, deleteList, editList}) => {
    return (
        <>
            {todo.length > 1 ? alert("List cannot be empty") :
                <div style={{ overflowY: "scroll" }} className="card w-50">
                    {
                        todo.map((item, i) =>
                            <div key={i} className="my-2 card">

                                <div>
                                    <h4>Entry title</h4>
                                    <p>{item.titleOne}</p>
                                </div>

                                <div>
                                    <h4>Entry body</h4>
                                    <p>{item.entryOne}</p>
                                </div>
                                <div>
                                    <button className={"btn btn-info w-50"} onClick={(w) => editList()}>Edit entry</button>
                                    <button onClick={() => deleteList(i)} className={"btn btn-danger w-50"}>Delete entry</button>
                                </div>
                            </div>
                        )
                    }
                </div>

            }
        </>
    )
}
export default Display