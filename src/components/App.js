import React, { Component } from 'react';
import '../custom.css';
import unsplash from '../api/unsplash';
import NavBar from './NavBar';
import Hero from './Hero';
import ListImages from './ListImages';

class App extends Component {
  state = {
    images: []
  }

  getListRandomPic = () => {
    unsplash.get('/photos', {
      params: {
        per_page: 20
      }
    }).then(response => (
      this.setState({
        images: response.data
      })
    ))
  }
  
  componentDidMount() {
    this.getListRandomPic();
  }

  render() {
    return(
      <div>
        <NavBar />
        <Hero />
        <ListImages images={this.state.images} />
      </div>
    )
  }
}

export default App; 