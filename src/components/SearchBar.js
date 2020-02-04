import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ''
    }
    onSubmitChange = event => {
        event.preventDefault();
    }
    render() {
        return (
            <div className='ui segment search-bar'>
                <form className='ui form' onSubmit={this.onSubmitChange}>
                        <label>First Name</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={(event) => this.setState({ term: event.target.value })}
                        />
                </form>
            </div>
        )
    }
}

export default SearchBar

