import React from 'react'

const App = (props) => {
    return (
        <div>
            {props.videos.length === 0 ? 'No rows' : 'Have a ' + props.videos.length + ' rows'}
        </div>
    )
}

export default App