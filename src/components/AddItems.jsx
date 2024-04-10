function AddItems({ todo, deleteTodo, selectedTodo, validateTodo, editTodo }) {
    return (
        <li onClick={selectedTodo} className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 
            ${todo.selected ? 'selected' : ''}`}>
            <span className="flex-fill">
                {todo.content} {todo.done && '✔'}
            </span>
            <button className="btn btn-primary mr-15" onClick={(e) => 
            {validateTodo(); 
            e.stopPropagation()}}>Validate</button>
            <button className="btn btn-primary mr-15" onClick={(e) => {
            e.stopPropagation();
            editTodo();
          }}>Modify</button>
            <button className="btn btn-reverse-primary" 
            onClick={(e) => 
            {deleteTodo(); 
            e.stopPropagation()}}>Delete</button>
        </li>
    )
}

export default AddItems;