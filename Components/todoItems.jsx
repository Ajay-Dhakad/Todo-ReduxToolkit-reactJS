import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo ,updatetodo } from '../App/Features/TodoSlice'

export default function TodoItems() {

  const Dispatch = useDispatch()

  const Todo = useSelector(state => state.todos)



  useEffect(() => {

    const todo = JSON.parse(localStorage.getItem('todolocal'))

    if (todo){

      Dispatch(updatetodo(todo))

    }

  },[])


  useEffect(()=>{

    localStorage.setItem('todolocal',JSON.stringify(Todo))
  },[Todo])

  


  return (
   
    <div className="li">
      <ul>

        { Todo.length === 0 ? <h2 className='notask'>No Tasks Here...</h2> : ''}
        
        {
          Todo.map((prev) =>
             
            <li key={prev.id} >{prev.todo}<button onClick={() => Dispatch(removeTodo(prev.id))}>X</button></li>

            )
        }

      </ul>
     </div>
     
   
  )
}

