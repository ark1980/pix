import React from 'react'
import Image from './Image';

const ImageList = (props) => {
  return (
    <div className="image-list">
      {props.images.map(image => (
          <Image key={image.id} image={image} />
      ))}
    </div>
  )
}

export default ImageList;
