import React ,{useState}from 'react'
import {useDispatch} from 'react-redux'
import { addTodos } from '../App/Features/TodoSlice'

export default function Form() {

  const[input,setinput] = useState('')

  const Dispatch = useDispatch()

  const handlesubmit=(e)=>{
e.preventDefault()

if (input.length>0){
  
  Dispatch(addTodos(input))
  setinput('')
}

return



  }

  return (
    <>
    <div className="form">
      <form action="" onSubmit={handlesubmit}>
      <input placeholder='Enter A Task !' type="text"  value={input} onChange={(e) => setinput(e.target.value)}/>
      <input type="submit" value="Add Todo" />
      </form>
     </div>
    </>
  )
}
