import React from 'react'

const ImageList = (props) => {
  return (
    <div className="image-list">
      {props.images.map(({alt_description, id, urls}) => (
        <div key={id}>
          <img src={urls.thumb} alt={alt_description} />
        </div>
      ))}
    </div>
  )
}

export default ImageList;
