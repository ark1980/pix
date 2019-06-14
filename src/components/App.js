import React, { Component } from 'react';
import '../custom.css';
import unsplash from '../api/unsplash';
import NavBar from './NavBar';
import Hero from './Hero';
import ListImages from './ListImages';
import { async } from 'q';

class App extends Component {
  state = {
    images: []
  }

  getListRandomPic = async () => {
    const response = await unsplash.get('/photos', {
      params: {
        per_page: 20
      }
    });

    this.setState({images: response.data})
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