import React, { useState } from 'react'

const Todo = () => {

  const [todo,settodo] = useState([])
  const [task,setTask] = useState({task:"", status:""})

  const handleChange = (event) =>{
    setTask({task: event.target.value, status:"Not Completed"})
  }
  
  const addtask = () => {
    settodo([...todo, task])
  }

  const deletet = (name) => {
    const a = prompt("Are you sure? \n 1 for Yes\n 0 for No");
    a==1 && settodo( todo.filter((task)=> task.task !== name))
  }

  const deleteall = () => {
    const a = prompt("Are you sure? \n 1 for Yes\n 0 for No");
    a==1 && settodo([])
  }

  return (
    <div className='todo'>
      <h2 className='head'>To-do List</h2>
      <div className='list'>
        <div className='opts'>
        <input type='text' onChange={(event)=>handleChange(event)}/>
        <div className='btns'>
        <button onClick={()=>addtask()} className='listbtn green'>Add new</button>
        <button onClick={()=>deleteall()} className='listbtn red'>Delete All</button>
        </div>
        </div>
        {
          todo.map((task)=>{
            return <div className='list-item'>
            {task.task}
            <button onClick={()=> deletet(task.task)} className='listbtn mapbtn '>Completed ?</button>
            </div>
          })
        }

      </div>
      
    </div>
  )
}

export default Todo
