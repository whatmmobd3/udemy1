import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ''
    }
    submitForm = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className='ui segment search-bar'>
                <form className='ui form' onSubmit={this.submitForm}>
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

