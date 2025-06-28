import React from 'react'
import '../styles/Task.css'

const Task = (props) => {
    const task_name =  props.name
    return (
        <div className='task'>
            <input type='checkbox' className='task-checkbox'/>
            <label>{task_name} </label>      

        </div>
    );
}
 
export default Task;