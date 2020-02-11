import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

import youtube, { baseParams } from '../apis/youtube'

class App extends React.Component {
    state = {
        videos: [],
        onSelected: null,
        obj: {
            title: null,
            id: null
        }
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

    changeSelect = event => {
        let value = this.state.videos.find(obj => obj.id.videoId === event.target.value)
        this.setState({
            obj: {
                ...this.state.obj,
                title: value.snippet.title,
                id: value.id.videoId,
            }
        })
    }

    btn = () => {
        console.log(this.state.obj);
    }

    render() {
        return (
            <div className='ui container'>
                <select
                    className="ui dropdown"
                    onChange={this.changeSelect}
                >
                    <option>Select</option>
                    {this.state.videos.map(element =>
                        <option
                            key={element.id.videoId}
                            value={element.id.videoId}
                        >
                            {element.snippet.title}
                        </option>
                    )}
                </select>

                <button className="ui button" onClick={this.btn} >
                    Show
                </button>

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