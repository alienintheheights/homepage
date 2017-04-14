import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import About from './About'
import Shows from './Shows/Shows'
import WordGame from './Words/WordGame'
import Gallery from './Photos/Gallery'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Shows dispatch={this.props.dispatch} />
        <About />
        <WordGame dispatch={this.props.dispatch} />
        <Gallery />
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.object,
  children: PropTypes.object,
  dispatch: PropTypes.func
}

function select(state) {
  return {
    data: state
  }
}

export default connect(select)(App)

