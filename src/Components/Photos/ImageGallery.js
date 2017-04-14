import React, { Component } from 'react'

class ImageGallery extends Component {
  render() {
    const { imageArray, selectImage, prevButton, nextButton } = this.props

    return (
      <div className="image-scroller">
       <div className="row">
          <div className="col-sm-12">
             <a href="#" onClick={prevButton}><span className="glyphicon glyphicon-triangle-left gcolor" aria-hidden="true"></span></a>
            {imageArray.map((image, index) => (
              <span key={index} onClick={selectImage.bind(this, image)}>
                <img src={image[1]} alt={image[0]} />
              </span>
            ))}
             <a href="#" onClick={nextButton}><span className="glyphicon glyphicon-triangle-right gcolor" aria-hidden="true"></span></a>
          </div>

        </div>
      </div>
    )
  }
}

export default ImageGallery
