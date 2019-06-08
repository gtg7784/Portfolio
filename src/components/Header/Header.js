import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  render() {
    return (
        <nav className="Header">
            <a href="#main">고태건</a>

            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#works">Works</a></li>
                {/* <li><a href="#awards">Awards</a></li> */}
            </ul>
        </nav>
    );
  }
}

export default Header;
