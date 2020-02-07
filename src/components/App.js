import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

import youtube, { baseParams } from '../apis/youtube'

class App extends React.Component {
    state = {
        videos: [],
        onSelected: null
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
                <VideoDetail video={this.state.onSelected} />
                <VideoList
                    videos={this.state.videos}
                    onSelected={(value) => this.setState({ onSelected: value })}
                />
            </div>
        )
    }
}

export default App