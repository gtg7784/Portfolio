import React, { Component } from 'react';

import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="Projects" id="Projects">
        <h1>Projects / Competitions</h1>
        <div>
          <div>
            <span>Projects</span>
            <span>17 - 19</span>
          </div>
          <div>
            <div className="cards year">
              2018
            </div>
            <div className="cards"/>
            <div className="cards"/>
            <div className="cards year">
              2019
            </div>
            <div className="cards"/>
            <div className="cards"/>
          </div>
        </div>
        <div>
          <div>
            <span>CTF</span>
            <span>18 - 19</span>
          </div>
          <div>
            <div className="cards"/>
            <div className="cards"/>
            <div className="cards"/>
            <div className="cards" />
          </div>
        </div>
        <div>
          <div>
            <span>Hackathons</span>
            <span>17 - 18</span>
          </div>
          <div>
            <div className="cards"/>
            <div className="cards"/>
            <div className="cards"/>
            <div className="cards" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
