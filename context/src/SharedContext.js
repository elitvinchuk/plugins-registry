import React from 'react'

const SharedContext = React.createContext()

export const SharedContextProvider = ({ children }) => {
  const value = React.useState(0)

  return (
    <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
  )
}

export const useSharedContext = () => {
  const context = React.useContext(SharedContext)

  if (!context) {
    throw new Error('useContext must be used within ContextProvider')
  }

  return context
}
