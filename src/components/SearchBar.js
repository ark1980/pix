import React, { Component } from 'react'

class SearchBar extends Component {

  render() {
    return (
      <div>
        <form>
          <input type="text"
            placeholder="Search free high quality photos"
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;