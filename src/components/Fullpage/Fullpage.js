import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import './Fullpage.scss';

import Main from '../../containers/Main/Main'
import About from '../../containers/About/About'
import Dev from '../../containers/Dev/Dev'
import Security from '../../containers/Security/Security'
import Works from '../../containers/Works/Works'
import Awards from '../../containers/Awards/Awards'

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
// const pluginWrapper = () => {
//     require('fullpage.js/vendors/scrolloverflow');
//     require('./statics/fullpage.scrollHorizontally.min');
//   };

class Fullpage extends Component {
  render() {
    return (
        <ReactFullpage
            // pluginWrapper
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <Main />
                        <About />
                        <Dev />
                        <Security />
                        <Works />
                        <Awards/>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
  }
}

export default Fullpage;
