import React from 'react'

const ListImages = (props) => {
  return (
    <div>
      {props.images.map(({alt_description, id, urls}) => (
        <div key={id}>
          <img src={urls.thumb} alt={alt_description} />
        </div>
      ))}
    </div>
  )
}

export default ListImages;
