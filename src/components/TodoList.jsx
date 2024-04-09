import AddItems from "./AddItems";

function TodoList({todoList}){
    return todoList.length ? (
        <ul>
            <span>
                {todoList.map((todo) => (<AddItems key={todo.id} todo={todo}/>))}
            </span>
            
        </ul>
    ) : <p>Aucune tâche</p>
}

export default TodoList;