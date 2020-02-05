import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'

import youtube, { baseParams } from '../apis/youtube'

class App extends React.Component {
    state = {
        videos: []
    }
    onTermSubmit = async term => {
        let res = await youtube.get('/search', {
            params: {
                ...baseParams,
                q: term
            }
        });
        this.setState({ videos: res.data.items })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App