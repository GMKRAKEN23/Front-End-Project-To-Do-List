import { useState } from "react";

function EditTodo({todo, editTodo}) {

    const [value, setValue] = useState(todo.content);

    function handleChange(e) {
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function handleClick() {
        if (value.length) {
            editTodo(value);
            setValue('');
        }
    }

    function handleKeyDown(e) {
        if (value.length && e.code === "Enter") {
            editTodo(value);
            setValue('');
        }
    }

    return (
        <div className="d-flex flex-row justify-content-center align-items-center mb-20">
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="mr-15 container"
            />
            <button className="btn btn-primary m-10" onClick={handleClick}>Sauvegarder</button>
            <button className="btn btn-reverse-primary m-15">Annuler</button>
        </div>
    )
}

export default EditTodo;