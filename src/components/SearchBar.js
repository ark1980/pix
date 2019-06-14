import React, { Component } from 'react'

class SearchBar extends Component {
  state={
    term: ""
  }

  handleChange = (e) => {
    this.setState({term: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.submitSearch(this.state.term)
  }

  render() {
    console.log(this.state.term)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            className="inputField"
            placeholder="Search free high quality photos"
            value={this.state.term}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;