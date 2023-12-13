import { useState } from 'react'
import Form from '../Components/Form'
import TodoItems from '../Components/todoItems'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1>Manage Your Task's here</h1>
     <Form/>
     <TodoItems/> 
    </>
  )
}

export default App;
