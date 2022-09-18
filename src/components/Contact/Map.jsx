import React from 'react'
import './Contact.css'

const Map = () => {
  return (
    <div className="map-content">
      {/* eslint-disable-next-line */}
      <iframe
        src="https://www.google.com/maps/space/mercury/@34.6183551,-127.8553234,467574a,35y,27.05t"
        width="100%"
        height="450"
        style={{ border: 0 }}
      ></iframe>
    </div>
  )
}

export default Map
