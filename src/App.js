
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';
import { useState } from "react"

function App() {
  
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    const id = Math.floor(Math.random()*100) + 1;
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    addTask({text})

    setText('')
    
  }
  //Delete Task

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }
  //
  
  const [text,setText] = useState('')
  return (
    <div className='m-4 py-2 rounded-md'>
      <div className=' grid justify-center m-4 py-2 rounded-md'>
        <Header title = 'To Do App'/>
        <div className='flex'>
          <form onSubmit = {onSubmit}>
            <input className="px-2 rounded-md border-2 border-black mx-4 w-72" value = {text} onChange={(e)=>
            setText(e.target.value)}
            />
            <Button text = 'Add' />
          </form>
          
          
        </div>
        <Tasks tasks = {tasks} onDelete={deleteTask}/>
      </div>
      
      
    </div>
    
  );
}

export default App;
