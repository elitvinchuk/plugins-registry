import React from 'react'
import Plugin from './Plugin'

const data = {
  first: 'specific data for the first plugin',
  center: [-0.2416815, 51.5285582],
}

export const App = () => (
  <div>
    <h1>Container for the second plugin</h1>
    <Plugin {...data} />
  </div>
)
