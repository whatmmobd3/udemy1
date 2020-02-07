import React from 'react'

const App = ({ video }) => {
    if (!video) {
        return <div>Loading ...</div>
    }
    return <div>{video.snippet.title}</div>
}

export default App