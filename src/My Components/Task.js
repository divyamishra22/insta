import React from 'react'

const Task = (task) => {
  return (
    <div class ="my">
       <h3>{task.title}</h3>
       <p>{task.description}</p>
    </div>
  )
}

export default Task