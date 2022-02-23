import React, { useState } from 'react'
import { SharedContextProvider } from '@plugins/context'

import { ContextValue, TaskView } from './components'

import { firstTask, secondTask, thirdTask } from './tasks'

const App = () => {
  const [task, setTask] = useState(null)

  return (
    <SharedContextProvider>
      <h1>The shell</h1>

      <ContextValue />

      <hr />

      <nav>
        <button
          onClick={() => {
            setTask(firstTask)
          }}
        >
          Load first task with first plugin
        </button>
        <button
          onClick={() => {
            setTask(secondTask)
          }}
        >
          Load second task with second plugin
        </button>
        <button
          onClick={() => {
            setTask(thirdTask)
          }}
        >
          Load third task with second plugin
        </button>
      </nav>

      <div style={{ marginTop: '2em' }}>{task && <TaskView task={task} />}</div>
    </SharedContextProvider>
  )
}

export default App
