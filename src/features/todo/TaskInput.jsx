import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import './styles/TaskInput.css'

const TaskInput = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTask(text));
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="task-input-form">
            <input 
                type="text" 
                className="task-input" 
                placeholder="Add task" 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="task-button">
                Add
            </button>
        </form>
    )
};

export default TaskInput;