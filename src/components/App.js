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

  getListRandomPic = async () => {
    const response = await unsplash.get('/photos', {
      params: {
        per_page: 20
      }
    });

    this.setState({images: response.data})
  }

  onSubmitSearch = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
        per_page: 20
      }
    });

    this.setState({images: response.data.results})
  }
  
  componentDidMount() {
    this.getListRandomPic();
  }

  render() {
    return(
      <div>
        <NavBar />
        <Hero submitSearch={this.onSubmitSearch} />
        <ListImages images={this.state.images} />
      </div>
    )
  }
}

export default App; 