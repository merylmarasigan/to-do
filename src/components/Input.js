import react from 'react'
import '../styles/Input.css'
const Input = () => {
    return (
        <div className='input'>
            <input type='text' placeholder='Enter Task' className='text-bar'>
            </input>
            <button>Submit</button>
        </div>
    );
}
 
export default Input;