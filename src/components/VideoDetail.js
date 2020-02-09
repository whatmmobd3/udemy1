import React from 'react'

// https://www.youtube.com/embed/_7vay-6rBpM"
const App = ({ video }) => {
    if (!video) {
        return <div>Loading ...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className='ui embed'>
                <iframe
                    src={videoSrc}
                    title={video.snippet.title}
                />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>
                    {video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default App