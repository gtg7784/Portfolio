import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  render() {
    return (
        <nav className="Header">
            <a href="#">고태건</a>

            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Awards</a></li>
            </ul>
        </nav>
    );
  }
}

export default Header;
