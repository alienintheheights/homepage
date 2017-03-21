import React, { Component } from 'react';

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
         <Shows />
         <PhotoRoller />
        <About />
         <Footer />
        <Modal />
      </div>
    );
  }
}

export default App

