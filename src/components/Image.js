import React, { Component } from 'react'

class Image extends Component {
 
  imageRef = React.createRef();
  
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpan);
  }
  
  setSpan = () => {
    console.log(this.imageRef.current.clientHeight)
  }
  
  render() {
    const {urls, description} = this.props.image;
    return (
      <img ref={this.imageRef} className="image" src={urls.small} alt={description}/>
    )
  }
}

export default Image;
