import React, { Component } from 'react';
import {connect} from 'react-redux'
import DynamicImage from './DynamicImage';
import { getNextIndex, shuffleImages, displayModal } from './actions'

class PhotoRoller extends Component {
  constructor(props) {
    super(props);
    this.rollImages = this.rollImages.bind(this);
    this.state = {
      refreshIntervalId: 0
    };
  }

  componentDidMount() {
    this.props.shuffleImages({});
    this.setState({ refreshIntervalId: setInterval(this.rollImages, 2000) });
    //window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUnMount() {
    //window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.state.refreshIntervalId);
  }

  handleScroll(event) {
    // TODO: detect when the images are out of view and turn off the rollImages()
  }

  rollImages() {
    // called by timer to pick an index and give it a new value.
    this.props.getNextIndex({});
  }

  render() {
    const { currentImages } = this.props.data // from state
    var me = this;

    return (
      <section className="success" id="portfolio">
        <div className="container page-scroll">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Photos</h2>
              <small>I take photos on my iPhone and my Canon 5D. <a href="https://www.flickr.com/photos/lienhard/">More on Flickr</a></small>
              <hr className="star-primary" />
               
            </div>
          </div>
          <div className="row">
            {currentImages.map(function (value, index) {
              return (<DynamicImage imageValue={value} key={index} {...me.props} />);
            })}
           
          </div>
        </div>
      </section>
    );
  }

}

PhotoRoller.propTypes = {
  data: React.PropTypes.object
}


function select(state) {
  return {
    data: state
  }
}


// Wrap the component to inject dispatch and state into it
export default connect(
    select, { getNextIndex, shuffleImages, displayModal }
)(PhotoRoller)

