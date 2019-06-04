import React, { Component } from 'react';

import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="About section">
        <h1>About</h1>
        <div>
          <div>
            <div/>
          </div>
          <div>
            <div>
              <h2>PROFILE</h2>
              <span>고태건 2003. 08. 04</span> <br />
              <p>
              한줄소개 <br/>
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipisicing, tempor incididunt ut labore et <br/>
                dolore magna aliqua
              </p>
            </div>
            <div>
              <h2>BIOGRAPHY</h2>
              2010.03 ~ 2016.01 ffffffff <br/>
              2016.02 ~ 2019.01 ffffffff <br/>
              2019.03 ~ 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
