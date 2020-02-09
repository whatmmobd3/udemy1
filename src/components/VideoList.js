import React from 'react'
import VideoItem from './VideoItem'

const App = ({ videos,onSelected }) => {
    const renderedList = videos.map(element => {
        return <VideoItem key={element.id.videoId} video={element} onSelected={onSelected} />
    })
    return (
        <div className="ui list relaxed divided">
            {renderedList}
        </div>
    )
}

export default App