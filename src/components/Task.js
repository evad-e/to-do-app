import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    
    
      
    return (  
        <div className = 'flex justify-between items-center p-2 '>
                <div className='flex items-center'>
                    <h2 className="text-xl">{task.text} </h2>
                </div>
                <FaTimes onClick = {()=>onDelete(task.id)} style={{color: 'red', cursor:'pointer'}}/>
        </div>
    )
}

export default Task
