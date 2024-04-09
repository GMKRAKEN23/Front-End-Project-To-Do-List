import AddItems from "./AddItems";

function TodoList({todoList, deleteTodo}){
    return todoList.length ? (
        <ul>
            <span>
                {todoList.map((todo) => 
                (<AddItems 
                key={todo.id} 
                todo={todo} 
                deleteTodo={() => deleteTodo(todo.id)}
                />))}
            </span>
            
        </ul>
    ) : <p>Aucune tâche pour le moment</p>
}

export default TodoList;