import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ''
    }
    render() {
        return (
            <div className='ui segment search-bar'>
                <form className='ui form'>
                    <div className='ui segment'>

                    <label>First Name</label>
                    <input
                        type='text'
                        value={this.state.term}
                        onChange={(event) => this.setState({ term: event.target.value })}
                        />

                        </div>
                </form>
            </div>

        )
    }
}

export default SearchBar

