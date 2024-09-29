import { configureStore } from '@reduxjs/toolkit';
import  todoSlice  from '../feature/Handel/Apihandle';

export const store = configureStore({//store the all functionality
    reducer:todoSlice
})