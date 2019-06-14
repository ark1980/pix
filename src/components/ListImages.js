import React from 'react'

const ListImages = (props) => {
  return (
    <div>
      {props.images.map(img => (
        <img src={img.urls.thumb} alt={img.alt_description} />
      ))}
    </div>
  )
}

export default ListImages;
