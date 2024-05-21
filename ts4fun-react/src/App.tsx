import React from "react";
import ToDoList from "./components/ToDoList";
import NewTodo from "./components/NewTodo";

function App() {
    const todos = [
        {id: "t1", text: "Finish the course"},
        {id: "t2", text: "Learn React"},
    ];

    const todoAddHandler = (text: string) => {
        console.log(text);
    };
    return (
        <div className="App">
            <NewTodo onAddItem={todoAddHandler} />
            <ToDoList items={todos} />
        </div>
    );
}

export default App;
