import {useRef} from "react";
import "./NewTodo.css";

type NewTodoProps = {
    onAddItem: (text: string) => void;
};

const NewTodo = (props: NewTodoProps) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddItem(enteredText);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;
