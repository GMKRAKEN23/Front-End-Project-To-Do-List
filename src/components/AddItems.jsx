function AddItems(
    {todo, 
    deleteTodo
    }){

    return (
            <li>
                <span>
                    {todo.content}
                </span>
                <button>Valider</button>
                <button>Modifier</button>
                <button onClick={(e) => {deleteTodo(); e.stopPropagation()}}>Supprimer</button>
            </li>
    )
}

export default AddItems;