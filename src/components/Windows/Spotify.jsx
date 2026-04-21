import React from 'react'
import MacWindows from './MacWindows'
import './spotify.scss'

const Spotify = () => {
  return (
    <MacWindows width='25vw'>
        <div className="spotify-window">
            <iframe
          src="https://open.spotify.com/embed/artist/4YRxDV8wJFPHPTeXepOstw?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: "12px" }}
        ></iframe>
        </div>
    </MacWindows>
  )
}

export default Spotify