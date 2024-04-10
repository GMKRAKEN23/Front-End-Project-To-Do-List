import AddItems from "./AddItems";
import EditTodo from "./EditTodo";

function TodoList({todoList, deleteTodo, selectedTodo, validateTodo, toggleEditTodo, editTodo}){
    return todoList.length ? (
        <ul>
                {todoList.map((todo) => todo.edit ? 
                (<EditTodo 
                key={todo.id} 
                todo={todo} 
                editTodo={(content) => editTodo(todo.id, content)}
                cancelEditTodo={() => toggleEditTodo(todo.id)}
                />)
                : 
                (<AddItems 
                key={todo.id} 
                todo={todo} 
                deleteTodo={() => deleteTodo(todo.id)}
                selectedTodo={() => selectedTodo(todo.id)}
                validateTodo={() =>validateTodo(todo.id)}
                editTodo={() => toggleEditTodo(todo.id)}
                />
                ))}
            
        </ul>
    ) : <p>No tasks at the moment</p>
}

export default TodoList;