import react, { useState } from 'react'
import '../styles/Input.css'
import supabase from '../config/supabaseClient'
import { useNavigate } from 'react-router-dom';

const Input = () => {
    const [title, setTitle] =  useState('')
    const [formError, setFormError] = useState(null)
    const navigate = useNavigate();

    const handleSubmit = async(e) => {

        const {data,error} = await supabase.from('task').insert([{title}]).select()

        if(error){
            console.log(error)
            setFormError('Please fill in all fields correctly')
        }

        if(data){
            console.log(`title ${title} was added to the database`);
            setFormError(null)
        }

        navigate('/')
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