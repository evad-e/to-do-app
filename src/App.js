
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';
import { useState } from "react"
function App() {
  const onClick = () =>{
    console.log("hello");

  }
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
    },
    {
      id: 2,
      text: 'Class Homework',
    },
    {
      id: 3,
      text: 'Walk the dog',
    },
  ])

  //Delete Task

  const deleteTask = (id)=>{
    console.log('delete',id)
  }
  return (
    <div className='m-4 py-2 rounded-md'>
      <div className=' grid justify-center m-4 py-2 rounded-md'>
        <Header title = 'To Do App'/>
        <div className='flex'>
          <input className="px-2 rounded-md border-2 border-black mx-4 w-72"></input>
          <Button text = 'Add' onClick = {onClick}/>
          
        </div>
        <Tasks tasks = {tasks} onDelete={deleteTask}/>
      </div>
      
      
    </div>
    
  );
}

export default App;
