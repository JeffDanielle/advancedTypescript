import "./TodoList.css";

interface ToDoListProps {
    items: {id: string; text: string}[];
    onDelete: (id: string) => void;
}

// provided interface which only needs an id and text
const ToDoList = (props: ToDoListProps) => {
    return (
        <ul>
            {props.items.map((todo) => {
                return (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => props.onDelete(todo.id)}>DELETE</button>
                    </li>
                );
            })}
        </ul>
    );
};

export default ToDoList;
