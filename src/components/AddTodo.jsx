import { useState } from "react";

function AddTodo({addTodo}){
    const [value, setValue] = useState("");

    function handleChange(e){
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function handleClick(){
        setValue(addTodo);
        setValue('');
    }


    return (
        <div>
            <input 
            type="text" 
            placeholder="Add a task"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
            <button onClick={handleClick}>Ajouter</button>
        </div>
    )
}

export default AddTodo;