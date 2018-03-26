import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import About from './About'
import Shows from './Shows/Shows'

class Home extends Component {

  render() {
    return (
      <div>
        <About dispatch={this.props.dispatch} />
        <Shows dispatch={this.props.dispatch} />
      </div>
    )
  }
}

Home.propTypes = {
  data: PropTypes.object,
  children: PropTypes.object,
  dispatch: PropTypes.func
}

function select(state) {
  return {
    data: state
  }
}

import { withRouter } from 'react-router-dom'
export default withRouter(connect(select)(Home))
