import React, { Component } from 'react'

class SearchBar extends Component {
  state={
    term: ""
  }

  handleChange = (e) => {
    this.setState({term: e.target.value})
  }

  render() {
    console.log(this.state.term)
    return (
      <div>
        <form>
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