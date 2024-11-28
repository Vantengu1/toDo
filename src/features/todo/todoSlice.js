import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    filter: 'all'
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(), // Уникальный идентификатор для каждой задачи
                text: action.payload,
                completed: false, // По умолчанию задача не выполнена
            });
        },
        toggleTaskStatus: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    }
});

export const { addTask, toggleTaskStatus, removeTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;