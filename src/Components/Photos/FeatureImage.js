import React, { Component } from 'react'

class FeatureImage extends Component {

  render() {
    const { image } = this.props
    return (
      <div className="gallery-image">
            {(image) ? <img src={image[1]} alt={image[0]} /> : ""}
      </div>
    )
  }
}


export default FeatureImage

