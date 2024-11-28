import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./todoSlice";
import './styles/TaskFilter.css'

// компонент для фильтрации задач
function TaskFilter() {
    const dispatch = useDispatch(); //хук useDispatch() для отправки действий в Redux Store
    const currentFilter = useSelector((state) => state.todos.filter); //Получаем текущий фильтр из Redux Store

    return (
        <div className="task-filter">
            <button
                onClick={() => dispatch(setFilter('all'))} //Устанавливаем фильтр на 'all'
                disabled={currentFilter === 'all'} // Деактевируем кнопку, если выбран текущий фильтр
                className="filter-button"
            >
                Все
            </button>
            <button
                onClick={() => dispatch(setFilter('completed'))} //Устанавливаем фильтр на 'completed'
                disabled={currentFilter === 'completed'} // Деактевируем кнопку, если выбран текущий фильтр
                className="filter-button"
            >
                Выполнено
            </button>
            <button
                onClick={() => dispatch(setFilter('incompleted'))} // Устанавливаем фильтр на 'incomplete'
                disabled={currentFilter === 'incompleted'} // Деактивируем кнопку, если выбран текущий фильтр
                className="filter-button"
            >
                Невыполнено
            </button>
        </div>
    );
};

export default TaskFilter;