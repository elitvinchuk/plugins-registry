import React, { lazy, useEffect, useState } from 'react'

const pluginMap = {
  first: 'http://localhost:8881/remoteEntry.js',
  second: 'http://localhost:8882/remoteEntry.js',
}

const getPluginUrl = plugin => pluginMap[plugin]

// todo: use constants
const scope = 'plugin'
const module = './Plugin'

const getPluginFromContainer = async () => {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__('default')
  const container = window[scope] // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default)
  const factory = await window[scope].get(module)

  return factory()
}

export const useDynamicPlugin = plugin => {
  const [failed, setFailed] = useState(false)
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    setFailed(false)

    const element = document.createElement('script')

    element.src = getPluginUrl(plugin)
    element.type = 'text/javascript'
    element.async = true

    element.onload = () => {
      console.log(`Plugin loaded: ${plugin}`)

      setComponent(lazy(getPluginFromContainer))
    }

    element.onerror = () => {
      console.log(`Plugin failed: ${plugin}`)
      setFailed(true)
    }

    document.head.appendChild(element)

    return () => {
      console.log(`Plugin removed: ${plugin}`)
      document.head.removeChild(element)
    }
  }, [plugin])

  return {
    Component,
    failed,
  }
}
