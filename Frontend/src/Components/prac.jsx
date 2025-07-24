import React, { useState } from 'react'

const prac = () => {

    let [formdata,setFromdata]=useState({
        task:"",
        description:""
    })

    let [loading,setLoading]=useState()

    const handleChange=(e)=>{
        setFromdata({...formdata,[e.target.name]:[e.target.value]})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()

        try {

            setLoading(true)
            console.log(formdata);

            let res=await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(formdata)
            })

            let data=await res.json()
            setTodo(data)
            
            
        } catch (error) {
            
        }
    }


  return (
    <div>
      
    </div>
  )
}

export default prac
