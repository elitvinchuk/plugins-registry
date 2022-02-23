import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useSharedContext } from '@plugins/context'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZWxpdHZpbmNodWsiLCJhIjoiY2loZDk2Zzc5MDAxYXUybTRvMmg5enp2dyJ9.BrkxvSHBnsNyjOI7Cy1Abw',
  dragRotate: false,
})

const Plugin = props => {
  const [context, setContext] = useSharedContext()

  return (
    <div
      style={{
        borderRadius: '4px',
        padding: '2em',
        backgroundColor: 'gray',
        color: 'white',
      }}
    >
      <h2>First plugin</h2>
      <div>
        Context value in child: {context}{' '}
        <button
          onClick={() => {
            setContext(context + 1)
          }}
        >
          increment from child
        </button>
      </div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          height: '40em',
          width: '100%',
        }}
        center={props.center}
      />
    </div>
  )
}

export default Plugin
