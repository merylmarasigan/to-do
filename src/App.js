import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Task from './components/Task';
import Footer from './components/Footer';

function App() {
  const tasks = ['work on site', 'exercise', 'shower', 'go to dinner', 'relax!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ]
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
        <Input/>
        {tasks.map((t) => {
          return <Task name={t}/>
        })}
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
