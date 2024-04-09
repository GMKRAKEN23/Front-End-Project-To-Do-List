import { useState } from "react";

function AddTodo({ addTodo }) {
    const [value, setValue] = useState("");

    function handleChange(e) {
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function handleClick() {
        if (value.length) {
            setValue(addTodo);
            setValue('');
        }
    }

    function handleKeyDown(e) {
        if(value.length && e.code === "Enter"){
            setValue(addTodo);
            setValue('');
        }
    }

    return (
        <div className="d-flex flex-row justify-center align-items-center mb-20"> 
            <input
                type="text"
                placeholder="Add a task"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="mr-15 container"
            />
            <button onClick={handleClick} className="btn btn-primary m-10">Ajouter</button>
        </div>
    )
}

export default AddTodo;