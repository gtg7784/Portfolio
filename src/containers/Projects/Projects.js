import React, { Component } from 'react';

import hackathon0 from '../../assets/hackathon/0.svg'
import hackathon1 from '../../assets/hackathon/1.svg'
import hackathon2 from '../../assets/hackathon/2.svg'
import hackathon3 from '../../assets/hackathon/3.svg'
import hackathon4 from '../../assets/hackathon/4.svg'
import hackathon5 from '../../assets/hackathon/5.svg'
import hackathon6 from '../../assets/hackathon/6.svg'
import hackathon7 from '../../assets/hackathon/7.svg'
import hackathon8 from '../../assets/hackathon/8.svg'
import hackathon9 from '../../assets/hackathon/9.svg'

import ctf0 from '../../assets/ctf/0.svg'
import ctf1 from '../../assets/ctf/1.svg'
import ctf2 from '../../assets/ctf/2.svg'

import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="Projects" id="projects">
        <h1>PROJECTS / COMPETITONS</h1>
        <div>
          <div>
            <span>hackathons</span>
            <span>17 - 19</span>
          </div>
          <div>
            <div>2019</div>
            <div  style={{ backgroundImage: `url(${hackathon9})` }} />
            <div>2018</div>
            <div style={{ backgroundImage: `url(${hackathon8})` }}/>
            <div style={{ backgroundImage: `url(${hackathon7})` }}/>
            <div style={{ backgroundImage: `url(${hackathon6})` }}/>
            <div style={{ backgroundImage: `url(${hackathon5})` }}/>
            <div style={{ backgroundImage: `url(${hackathon4})` }}/>
            <div style={{ backgroundImage: `url(${hackathon3})` }}/>
            <div>2017</div>
            <div style={{ backgroundImage: `url(${hackathon2})` }} />
            <div style={{ backgroundImage: `url(${hackathon1})` }}/>
            <div style={{ backgroundImage: `url(${hackathon0})` }}/>
          </div>
        </div>
        <div>
          <div>
            <span>CTF</span>
            <span>18 - 19</span>
          </div>
          <div>
            <div>2018</div>
            <div style={{ backgroundImage: `url(${ctf2})` }}/>
            <div style={{ backgroundImage: `url(${ctf1})` }}/>
            <div>2017</div>
            <div style={{ backgroundImage: `url(${ctf0})` }} />
          </div>
        </div>
        <div>
          <div>
            <span>Projects</span>
            <span>17 - 18</span>
          </div>
          <div>
            <div style={{ backgroundImage: `url(${hackathon5})` }}/>
            <div style={{ backgroundImage: `url(${hackathon4})` }}/>
            <div style={{ backgroundImage: `url(${hackathon1})` }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
