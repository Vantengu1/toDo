import './styles/TaskList.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTaskStatus } from './todoSlice';
import './styles/TaskList.css'


const TaskList = () => {
    const tasks = useSelector((state) => {
        if (state.todos.filter === 'completed') {
            return state.todos.tasks?.filter((task) => task.completed); // Показываем только выполненные задачи
        } else if (state.todos.filter === 'incompleted') {
            return state.todos.tasks.filter((task) => !task.completed); // Показываем только невыполненные задачи
        }
        return state.todos.tasks; // Показываем все задачи
    });
    const dispatch = useDispatch();

    return (
        <div className="task-list">
            {tasks && tasks.map((task) => (
                <li key={task.id} className="task-item">
                    <input type="radio" 
                        style={{
                            textDecoration: task.completed
                                ? 'line-through'
                                : 'none',
                        }} // Зачеркиваем текст, если задача выполнена
                        onClick={() => dispatch(toggleTaskStatus(task.id))}
                    />
                    <span
                        style={{
                            textDecoration: task.completed
                                ? 'line-through'
                                : 'none',
                        }} // Зачеркиваем текст, если задача выполнена
                        onClick={() => dispatch(toggleTaskStatus(task.id))} // Переключаем статус задачи при клике
                        className="task-text"
                    >
                        {task.text}
                    </span>
                    <button onClick={() => dispatch(removeTask(task.id))} className="delete-button">Удалить</button> {/* Кнопка для удаления задачи */}
                </li>
            ))}
        </div>
    )
};

export default TaskList;