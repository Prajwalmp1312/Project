import React, { useState } from 'react'

const TodoInput = ({setTodo}) => {

    let [formData,setFormdata]=useState({
        task:"",
        description:""

    });

    let [loading,setLoading]=useState();

    const handleChange=(e)=>{
        setFormdata({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {

            setLoading(true)
            console.log(formData);

            let res=await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(formData)
            })

            let data=await res.json()
            setTodo(data)
            setLoading(false)

            setFormdata({
                task:"",
                description:""
            })
            
            
        } catch (error) {
            console.log(error);
            
        }
    }


  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="task" id="task" placeholder='Enter the task' onChange={handleChange} value={formData.task} />
            <input type="text" name="description" id="description" placeholder='Enter the description' onChange={handleChange} value={formData.description} />
            <button type='submit'>
                {loading?"Adding a todo...":"Add a todo"}
            </button>

        </form>
      
    </div>
  )
}

export default TodoInput
