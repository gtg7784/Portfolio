import React, { Component } from 'react';

import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <h1>ABOUT</h1>
        <div>
          <h1>EDUCATION</h1>
          <p>
            2010.03 ~ 2016.02 언남초등학교 졸업 <br/>
            2016.03 ~ 2018.02 용인신릉중학교 졸업 <br/>
            2016.03 ~ 2019.02 KAIST 사이버영재교육원 C언어 수료 <br/>
            2018.03 ~ 2019.02 서울여자대학교 정보보호영재교육원 5기 해킹준비과정 수료 <br />
            2019.03 ~ 선린인터넷고등학교 재학 <br />
            2018.03 ~ 서울여자대학교 정보보호영재교육원 6기 해킹추적과정 이수
          </p>
          <h1>AFFILIATION</h1>
          <p>
            2018.05 ~ 2018.11 Team A0V3R<br/>
            2018.08 ~ 2018.11 Team.Tofu <br/>
            2018.08 ~ 2018.11 시엘 Ciel<br/>
            2018.09 ~ 2018.11 한국청소년정보과학회 - KYSIS <br />
            2019.01 ~ 2019.06 Launchers-Lab (RYDE) <br/> 
            2018.02 ~ Team_Idiots <br />
            2018.08 ~ LAB-C <br />
            2019.03 ~ Emotion - 이모션
          </p>
        </div>
      </div>
    );
  }
}

export default About;
