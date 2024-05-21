import React from "react";
import ToDoList from "./components/ToDoList";
import NewTodo from "./components/NewTodo";

function App() {
    const todos = [
        {id: "t1", text: "Finish the course"},
        {id: "t2", text: "Learn React"},
    ];
    return (
        <div className="App">
            <NewTodo />
            <ToDoList items={todos} />
        </div>
    );
}

export default App;
