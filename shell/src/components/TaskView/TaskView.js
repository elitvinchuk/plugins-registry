import React, { Suspense } from 'react'

import { useDynamicPlugin } from './hooks'

export function TaskView({ task: { plugin, data } }) {
  const { Component, failed } = useDynamicPlugin(plugin)

  if (!Component) {
    return `Loading plugin: ${plugin}`
  }

  if (failed) {
    return `Failed to load Plugin: ${plugin}`
  }

  return (
    <Suspense fallback="Loading Plugin">
      <Component {...data} />
    </Suspense>
  )
}
