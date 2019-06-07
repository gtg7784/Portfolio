import React, { Component } from 'react';

import './Illust.scss';

import LandingIllust1 from "../../assets/landing-illust-1.svg";
import LandingIllust2 from "../../assets/landing-illust-2.svg";
import LandingIllust3 from "../../assets/landing-illust-3.svg";
import LandingIllust4 from "../../assets/landing-illust-4.svg";
import LandingIllust5 from "../../assets/landing-illust-5.svg";

class Illust extends Component {
  render() {
    return (
      <div className="Illust">
        <img src={LandingIllust1} alt="" />
        <img src={LandingIllust2} alt="" />
        <img src={LandingIllust3} alt="" />
        <img src={LandingIllust4} alt="" />
        <img src={LandingIllust5} alt=""/>
      </div>
    );
  }
}

export default Illust;
