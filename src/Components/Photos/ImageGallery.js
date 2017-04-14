import React, { Component } from 'react'

class ImageGallery extends Component {
  render() {
    const { imageArray, selectImage, prevButton, nextButton, pageNumber} = this.props

    const nextBtnClass = "btn btn-warning btn-sm"
    const prevBtnClass = (pageNumber === 1) ? "btn btn-warning btn-sm disabled" : nextBtnClass

    return (
      <div className="image-scroller">
        <button className={prevBtnClass} onClick={prevButton}>Prev</button>
        {imageArray.map((image, index) => (
          <div key={index} onClick={selectImage.bind(this, image)}>
            <img src={image[1]} alt={image[0]} />
          </div>
        ))}
        <button className={nextBtnClass} onClick={nextButton}>Next</button>
      </div>
    )
  }
}

export default ImageGallery
