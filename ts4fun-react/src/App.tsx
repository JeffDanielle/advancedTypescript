import {useState} from "react";
import ToDoList from "./components/ToDoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./todo.model";

function App() {
    // state with an interface that expects id and text
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos((prevTodos) => [...prevTodos, {id: Math.random().toString(), text}]);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };
    return (
        <div className="App">
            <NewTodo onAddItem={todoAddHandler} />
            <ToDoList items={todos} onDelete={todoDeleteHandler} />
        </div>
    );
}

export default App;
