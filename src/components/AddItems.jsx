function AddItems({ todo, deleteTodo, selectedTodo, validateTodo }) {
    return (
        <li onClick={selectedTodo} className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 
            ${todo.selected ? 'selected' : ''}`}>
            <span className="flex-fill">
                {todo.content} {todo.done && '✔'}
            </span>
            <button onClick={(e) => {validateTodo(); e.stopPropagation()}} className="btn btn-primary mr-15">Valider</button>
            <button className="btn btn-primary mr-15">Modifier</button>
            <button className="btn btn-reverse-primary" onClick={(e) => { deleteTodo(); e.stopPropagation() }}>Supprimer</button>
        </li>
    )
}

export default AddItems;