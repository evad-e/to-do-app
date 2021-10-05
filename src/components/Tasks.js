import Task from "./Task"

const Tasks = ({tasks, onDelete, onClear}) => {
    
    return (
        <div className = 'bg-grey-600 p-2'>
            
            {tasks.map((task)=> (
                <Task key = {task.id} task={task} onDelete={onDelete}/>
            ))} 
            
           
        </div>
    )
}

export default Tasks
