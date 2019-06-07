import React, { Component } from 'react';
import '../custom.css';
import NavBar from './NavBar';
import Hero from './Hero';

class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <Hero />
      </div>
    )
  }
}

export default App;