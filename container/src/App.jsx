import React, { useState } from 'react'

import { firstTask, secondTask, thirdTask } from './tasks'
import { TaskView } from './TaskView/TaskView'

export const App = () => {
  const [task, setTask] = useState(null)

  return (
    <div>
      <h1>Plugins as Module federation</h1>

      <button
        onClick={() => {
          setTask(firstTask)
        }}
      >
        Load first task
      </button>
      <button
        onClick={() => {
          setTask(secondTask)
        }}
      >
        Load second task
      </button>
      <button
        onClick={() => {
          setTask(thirdTask)
        }}
      >
        Load third task
      </button>
      <div style={{ marginTop: '2em' }}>{task && <TaskView task={task} />}</div>
    </div>
  )
}
