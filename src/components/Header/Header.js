import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  render() {
    return (
        <nav className="Header">
            <a href="#Main">고태건</a>

            <ul>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Works">Works</a></li>
                <li><a href="#Awards">Awards</a></li>
            </ul>
        </nav>
    );
  }
}

export default Header;
