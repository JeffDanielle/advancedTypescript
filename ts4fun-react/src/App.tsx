import React from "react";
import ToDoList from "./components/ToDoList";

function App() {
    const todos = [
        {id: "t1", text: "Finish the course"},
        {id: "t2", text: "Learn React"},
    ];
    return (
        <div className="App">
            <ToDoList items={todos} />
        </div>
    );
}

export default App;
