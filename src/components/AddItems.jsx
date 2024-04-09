function AddItems({todo}){
    return (
            <li>
                <span>
                    {todo.content}
                </span>
            </li>
    )
}

export default AddItems;