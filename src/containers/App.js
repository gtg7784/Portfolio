import React, { Component } from 'react';

import Header from '../components/Header/Header'
import Illust from '../components/Illust/Illust'
import Sidebar from '../components/Sidebar/Sidebar'

import Main from './Main/Main'
import About from './About/About'
import Dev from './Dev/Dev'
import Security from './Security/Security'
import Works from './Works/Works'
import Awards from './Awards/Awards'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Illust />
        <Header />
        <Sidebar />
        
        <Main />
        <About />
        <Dev />
        <Security />
        <Works />
        <Awards/>
      </div>
    );
  }
}

export default App;
