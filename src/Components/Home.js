import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import About from './About'
import Shows from './Shows/Shows'
import WordGame from './Words/WordGame'
import Gallery from './Photos/Gallery'

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <Shows dispatch={this.props.dispatch} />
        <Gallery />
        <WordGame dispatch={this.props.dispatch} />
        <About dispatch={this.props.dispatch} />
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

