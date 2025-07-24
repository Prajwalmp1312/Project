import React, { Fragment, useEffect, useState } from 'react'
import TodoInput from './Components/TodoInput'

const App = () => {
  const [todos,setTodos]=useState([])
  const [loading,setLoading]=useState(true)

  let [todo,setTodo]=useState(null)

  const fetchTodos=async()=>{
    try {
      setLoading(true);
      let res=await fetch("http://localhost:5000/todos")
      if(!res.ok){
        throw new Error("Not able to connect")
        
      }
      let data=await res.json()
      setTodos(data)
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      
    }
  };

 useEffect(()=>{
    fetchTodos()
  },[todo])

  return (
   <Fragment>
    <div className="form">
      <TodoInput setTodo={setTodo}></TodoInput>
    </div>
    {loading ?(
      <div>Loading....</div>

    ):(
      <ul>
        {todos.map((todo)=>{
          return <li key={todo._id}>{todo.task}<br>
          </br>{todo.description}</li>
        })}
      </ul>
    )}
   </Fragment>
  )
}

export default App
