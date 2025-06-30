import React from 'react'
import '../styles/Task.css'
import { useState } from 'react';
import supabase from '../config/supabaseClient';
import { useNavigate } from 'react-router-dom';


const Task = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const task_name =  props.name;
    const id = props.id;
    const navigate = useNavigate();


    const handleChange = async (event) =>{
        setIsChecked(event.target.checked);
        console.log(`delete for task: ${task_name} (id ${id}) set to: ${event.target.checked}`)

        const {data, error} = await supabase.from('task').delete().eq('id',id).select()

        if(error){
            console.log(error)
        }

        if(data){
            console.log('DELETE SUCCESSFUL!')
        }

        navigate('/')
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