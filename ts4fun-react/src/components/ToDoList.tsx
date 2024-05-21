interface ToDoListProps {
    items: {id: string; text: string}[];
}

// provided interface which only needs an id and text
const ToDoList = (props: ToDoListProps) => {
    return (
        <ul>
            {props.items.map((todo) => {
                return <li key={todo.id}>{todo.text}</li>;
            })}
        </ul>
    );
};

export default ToDoList;
