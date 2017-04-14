import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ImageGallery from './ImageGallery'
import FeatureImage from './FeatureImage'
import { loadImages, selectImage } from '../../actions'
import { IMAGES_PER_PAGE } from '../../constants'

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.nextBatch = this.nextBatch.bind(this)
    this.prevBatch = this.prevBatch.bind(this)
    this.state = {
      pageNumber: 1
    }
  }

  componentDidMount() {
    this.props.loadImages({
      page: this.state.pageNumber,
      size: IMAGES_PER_PAGE
    })
  }

  nextBatch(e) {
    const { pageNumber } = this.state
    this.props.loadImages({
      page: pageNumber + 1,
      size: IMAGES_PER_PAGE
    })
    this.setState({
      pageNumber: pageNumber + 1
    })
  }

  prevBatch(e) {
    const { pageNumber } = this.state
    if (pageNumber === 1) return

    this.props.loadImages({
      page: pageNumber - 1,
      size: IMAGES_PER_PAGE
    })
    this.setState({
      pageNumber: pageNumber - 1
    })
  }

  render() {
    const { images, selectedImage } = this.props.data
    const { selectImage } = this.props
    const { pageNumber } = this.state

    return (
      <section className="success" id="portfolio">
        <div className="container page-scroll">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Flickr Photos</h2>
              <small>I wrote this photo gallery using the Flickr REST API. Visit our <a className="successLink" href="https://www.flickr.com/photos/lienhard/">Flickr page</a></small>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4 text-center">
              <ImageGallery imageArray={images} selectImage={selectImage} pageNumber={pageNumber} nextButton={this.nextBatch} prevButton={this.prevBatch}/>
              <FeatureImage image={selectedImage} />
            </div>
          </div>
        </div>
      </section>
    );
  }

}

Gallery.propTypes = {
  data: PropTypes.object
}


function select(state) {
  return {
    data: state
  }
}


// Wrap the component to inject dispatch and state into it
export default connect(
  select, { loadImages, selectImage }
)(Gallery)

