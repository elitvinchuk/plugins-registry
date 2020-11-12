import React from 'react'

import Plugin from './Plugin'

const data = {
  first: 'specific data for the first plugin',
  center: [-0.481747846041145, 51.3233379650232],
}

export const App = () => (
  <div>
    <h1>Container for the first plugin</h1>
    <Plugin {...data} />
  </div>
)
