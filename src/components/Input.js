import React, { useState } from 'react'
import '../styles/Input.css'

const Input = (props) => {
    const [title, setTitle] =  useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault();

        const success = await props.onTaskAdded(title);

        if(success){
            setTitle('');
            setFormError(null);
        }else{
            setFormError('failed to add task');
            console.log(formError);
        }

    } 
    return (
        <div className='input'>
            <form onSubmit={handleSubmit}>

                <input type='text'
                placeholder='Enter title'
                className='text-bar'
                value={title}
                onChange={(event) => {setTitle(event.target.value)}}
                required
                >
                </input>
                <button>Submit</button>

            </form>
           
        </div>
    );
}
 
export default Input;