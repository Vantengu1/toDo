import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const storeTodo = configureStore({
    
    reducer: {
        todos: todoReducer,
    }
});