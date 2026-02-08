import React, { useState } from 'react';

const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            props.addtodo(title, desc);
            setTitle("");
            setDesc("");
            console.log("Title:", title, "Description:", desc);
        }
        
    }
    return (
        <div className="container my-3">
            <h3 className="text-center">Add New Todo</h3>
            <form onSubmit={submit}>
                <fieldset enabled className="border p-2">
                    <legend>Fill todo details</legend>
                    <div className="mb-3">
                        <label for="todoTitle" className="form-label my-3">Todo Title</label>
                        <input type="text" id="todoTitle" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Enter todo title"/>
                    </div>
                    <div className="mb-3">
                        <label for="todoDesc" className="form-label">Todo Description</label>
                        <input type="text" id="todoDesc" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" placeholder="Enter todo description"/>
                    </div>
                    <button type="submit" className="btn btn-success">Add todo</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Addtodo
