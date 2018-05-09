import React, { Component } from 'react'

class FeatureImage extends Component {

    render() {
        const { image } = this.props
        return (
          <div className="row gallery-image">
            {(image) ? (
              <div className="col-sm-12 text-center">
                <img src={image[1]} alt={image[0]} />
                <div className="image-title">{image[0]}</div>
              </div>
            ) :  <div className="loader"/>}
          </div>
        )
    }
}


export default FeatureImage

