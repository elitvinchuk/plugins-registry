import React from 'react'
import { useSharedContext } from '@plugins/context'

export const ContextValue = () => {
  const [context, setContext] = useSharedContext()

  return (
    <>
      <div>Context value: {context}</div>
      <div>
        <button
          onClick={() => {
            setContext(context + 1)
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setContext(context - 1)
          }}
        >
          Decrement
        </button>
      </div>
    </>
  )
}
