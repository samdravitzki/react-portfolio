import React from 'react'

export default function HomeDetail() {
  return (
    <div style={HomeDetailContainer}>
      <span style={label}>Status:</span>
    </div>
  )
}

const label = {
    textDecoration: 'bold',
    alignSelf: 'left'
}

const HomeDetailContainer = {   
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'left',
    alignItems: 'left',
    fontSize: '2rem'
}
