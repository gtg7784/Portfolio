import React, { Component } from 'react';

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main" id="main">
        <h1>고태건</h1>
        <span>제가 가지고 있는 능력으로 세상을 <br />
          더 편하게 바꾸고 싶은 개발자입니다.</span>
        <a href="mailto:gtg7784@naver.com">CONTACT</a>
      </div>
    );
  }
}

export default Main;
