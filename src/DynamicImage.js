import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { displayModal } from './actions'
import { genStyleTag } from './util'

class DynamicImage extends Component {

  _onClick() {
   // const { imageValue } = this.props
    //this.props.displayModal(imageValue)
  }

  render() {
    const { imageValue } = this.props
    const style = genStyleTag(imageValue)

    return (
      <div className="PhotoRoller">
          <div className="col-sm-4 portfolio-item">
             <img style={style} alt={imageValue} className="thumb img-responsive" />
          </div>
     </div>
    );
  }
}

DynamicImage.propTypes = {
  data: React.PropTypes.object
}


function select(state) {
  return {
    data: state
  }
}


// Wrap the component to inject dispatch and state into it
export default connect(
    select, { displayModal }
)(DynamicImage)
