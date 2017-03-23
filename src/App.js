import React, { Component } from 'react'
import {connect} from 'react-redux'

import './App.css';
import Header from './Header'
import Modal from './Modal'
import Footer from './Footer'
import PhotoRoller from './PhotoRoller'
import About from './About'
import Shows from './Shows'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Shows dispatch={this.props.dispatch} />
        <PhotoRoller />
        <About />
        <Footer />
        <Modal />
      </div>
    );
  }
}

App.propTypes = {
  data: React.PropTypes.object,
  children: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function select(state) {
  return {
    data: state
  }
}

export default connect(select)(App)

