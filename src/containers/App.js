import React, { Component } from 'react';

import Header from '../components/Header/Header'
import Illust from '../components/Illust/Illust'
import Sidebar from '../components/Sidebar/Sidebar'

import Main from './Main/Main'
import About from './About/About'
import Projects from './Projects/Projects'
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
        <Projects />
        <Works />
        <Awards/>
      </div>
    );
  }
}

export default App;
