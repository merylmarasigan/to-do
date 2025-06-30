import React from 'react'
import '../styles/Task.css'
import { useState } from 'react';


const Task = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const task_name =  props.name;
    const id = props.id;


    const handleChange = async (event) =>{
        setIsChecked(event.target.checked);
        console.log(`delete for task: ${task_name} (id ${id}) set to: ${event.target.checked}`);

        if(event.target.checked){
            props.onTaskDeleted(id);
        }
    }
    return (
        <div className='task'>
            <input type='checkbox'
            className='task-checkbox'
            checked={isChecked}
            onChange= {handleChange}
            />
            <label>{task_name} </label>      

        </div>
    );
}
 
export default Task;