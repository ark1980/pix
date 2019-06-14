import React from 'react';
import SearchBar from './SearchBar';

const Hero = (props) => {
  return(
    <div className="hero_image">
      <div className="hero_content">
        <div className="hero_text">
          <h1>Pix</h1>
          <p>Beautiful, free photos</p>
          <p>Gifted by the world’s most generous community of photographers.</p>
        </div>
        <SearchBar submitSearch={props.submitSearch}/>
      </div>
    </div>
  )
}

export default Hero;