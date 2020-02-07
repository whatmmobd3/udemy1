import React from 'react'

// https://www.youtube.com/embed/_7vay-6rBpM"
const App = ({ video }) => {
    if (!video) {
        return <div>Loading ...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className='ui segment'>
            <iframe
                width="560" height="315"
                src={videoSrc}
                title={video.snippet.title}
            />
            <h4 className='ui header'>
                {video.snippet.title}
            </h4>
            <p>{video.snippet.description}</p>
        </div>)
}

export default App