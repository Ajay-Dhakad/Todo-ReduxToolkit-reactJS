import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from './Features/TodoSlice';

export const Store = configureStore({
    reducer:TodoReducer
})
