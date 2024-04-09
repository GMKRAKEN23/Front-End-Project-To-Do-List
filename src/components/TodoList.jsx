import AddItems from "./AddItems";

function TodoList({todoList, deleteTodo, selectedTodo, validateTodo}){
    return todoList.length ? (
        <ul>
            <span>
                {todoList.map((todo) => 
                (<AddItems 
                key={todo.id} 
                todo={todo} 
                deleteTodo={() => deleteTodo(todo.id)}
                selectedTodo={() => selectedTodo(todo.id)}
                validateTodo={() =>validateTodo(todo.id)}
                />))}
            </span>
            
        </ul>
    ) : <p>Aucune tâche pour le moment</p>
}

export default TodoList;