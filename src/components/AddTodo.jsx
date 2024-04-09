import { useState } from "react";

function AddTodo(){
    const [value, setValue] = useState("");

    function handleChange(e){
        const inputValue = e.target.value;
        setValue(inputValue);
    }



    return (
        <div>
            <input 
            type="text" 
            placeholder="Add a task"
            value={value}
            onChange={handleChange}
            />
            <button>Ajouter</button>
        </div>
    )
}

export default AddTodo;