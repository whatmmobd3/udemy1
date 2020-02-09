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

    componentDidMount() {
        this.onTermSubmit('lexus es')
    }

    onTermSubmit = async term => {
        let res = await youtube.get('/search', {
            params: {
                ...baseParams,
                q: term
            }
        });
        this.setState({
            videos: res.data.items,
            onSelected: res.data.items[0]
        })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='ten wide column'>
                            <VideoDetail video={this.state.onSelected} />
                        </div>
                        <div className='six wide column'>
                            <VideoList
                                videos={this.state.videos}
                                onSelected={(value) => this.setState({ onSelected: value })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App