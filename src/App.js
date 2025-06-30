import './App.css';
import Input from './components/Input';
import Task from './components/Task';
import Footer from './components/Footer';
import supabase from './config/supabaseClient'
import { useState, useEffect } from 'react';
function App() {
  // const tasks = ['work on site', 'exercise', 'shower', 'go to dinner', 'relax!',
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  // ]
  console.log(supabase)

  const [tasks, setTasks] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const addTask =  async (taskTitle) => {
    const {data, error} = await supabase.from('task').insert([{title:taskTitle}]).select()

    if(error){
      console.log('Error adding task', error)
      return false;
    }

    if(data){
      setTasks(prev => [...prev, data[0]]);
      console.log(`title ${taskTitle} was added to the database`);
      return true;
    }
    // setTasks(prev => [...prev, newTask])
  }

  const deleteTask = async (taskId) => {
    const {error} = await supabase.from('task').delete().eq('id',taskId);

    if(error){
      console.log(error);

    }else{
      setTasks(prev => prev.filter(task => task.id !== taskId));
      console.log('Delete successful!')
    }
  }

  useEffect(()=>{
    
    const fetchTasks = async () => {
      const {data, error} = await supabase.from('task').select();

      if(error){
        setFetchError('Could not fetch data');
        setTasks([]);
        console.log(error);
      }

      if(data){
        console.log({data});
        setTasks(data)
        setFetchError();
      }
    }

    fetchTasks();
  }, [])

  return (
    <div className="App"
    style={{
      backgroundImage: 'url(/background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}
    >
      <div className='main'>
        <h1>Today's Tasks:</h1>
        <h2>{new Date().toDateString()}</h2>
        <Input onTaskAdded={addTask}/>
  
        { !fetchError && tasks.map((task,idx) => {
          return <Task
                  key={task.id}
                  name={task.title}
                  id={task.id}
                  onTaskDeleted={deleteTask}
                  />
        })}

        {fetchError && <p>Error fetching data</p> }

      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
