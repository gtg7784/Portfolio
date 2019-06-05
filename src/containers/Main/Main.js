import React, { Component } from 'react';

import asset1 from '../../assets/element_crystal.svg'
import asset2 from '../../assets/pencil_2.svg'

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main" id="Main">
        <div>
          <h1>고태건</h1>
          <span>The typeface doesn’t really matter. <br/>
            as long as the text is good.</span>
          <button>CONTACT</button>
          <div>
            <img src={asset1} alt="" />
            <img src={asset2} alt="" />
          </div>
        </div>
        <div>
          <div/>
        </div>
      </div>
    );
  }
}

export default Main;
