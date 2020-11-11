import React, { lazy, Suspense } from 'react'
import { useDynamicPlugin } from '../hooks'

const scope = 'plugin'
const module = './Widget'

function loadComponent() {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default')
    const container = window[scope] // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default)
    const factory = await window[scope].get(module)
    const Module = factory()
    return Module
  }
}

export function TaskView({ task: { plugin, data } }) {
  const { failed, ready } = useDynamicPlugin(plugin)

  if (!ready) {
    return `Loading Plugin: ${plugin}`
  }

  if (failed) {
    return `Failed to load Plugin: ${plugin}`
  }

  const Component = lazy(loadComponent())

  return (
    <Suspense fallback="Loading Plugin">
      <Component data={data} />
    </Suspense>
  )
}
