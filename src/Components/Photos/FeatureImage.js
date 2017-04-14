import React, { Component } from 'react'

class FeatureImage extends Component {

  render() {
    const { image } = this.props
    return (
      <div className="gallery-image">
        {(image) ? (
          <div><img src={image[1]} alt={image[0]} />
            <div className="image-title">{image[0]}</div></div>
        ) : ""}
      </div>
    )
  }
}


export default FeatureImage

