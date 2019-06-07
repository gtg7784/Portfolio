import React, { Component } from 'react';

import ic_fb from '../../assets/ic_fb.svg'
import ic_github from '../../assets/ic_github.svg'
import ic_insta from '../../assets/ic_insta.svg'
import ic_mail from '../../assets/ic_mail.svg'

import './Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <a href="https://facebook.com/gtg7784"><img src={ic_fb} alt="facebook"/></a>
        <a href="https://instagram.com/gtg7784"><img src={ic_insta} alt="instagram"/></a>
        <a href="https://github.com/gtg7784"><img src={ic_github} alt="github"/></a>
        <a href="mailto:gtg7784@naver.com"><img src={ic_mail} alt="mail"/></a>
      </div>
    );
  }
}

export default Sidebar;
