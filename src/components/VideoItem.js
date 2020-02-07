import '../css/VideoItem.css'
import React from 'react'

const App = ({ video, onSelected }) => {
    return (
        <div className="video-item item" onClick={() => onSelected(video)}>
            <img
                className='ui image'
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.description}
            />
            <div className='content'>
                <div className='header'>
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default App