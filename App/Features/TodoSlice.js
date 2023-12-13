import{createSlice,nanoid} from '@reduxjs/toolkit';
import { useEffect } from 'react';

const initialState = {

    todos:[]
    

}


export const TodoSlice = createSlice({

    name:'todo',
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            const todo = {
                id:nanoid(),
                todo:action.payload
                };
                state.todos.push(todo);
            },

            removeTodo:(state,action) => {
             
                state.todos = state.todos.filter(prevstate => prevstate.id !== action.payload)
            },
            
            updatetodo: (state,action) => {

                state.todos = action.payload
            }
        }
    


})


export const {addTodos,removeTodo,updatetodo} = TodoSlice.actions;
export default TodoSlice.reducer;
