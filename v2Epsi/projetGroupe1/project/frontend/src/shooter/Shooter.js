import React, { Component } from 'react';
import './Shooter.css';
import GestionShooter from './gestionShooter.js';
import './infoaccordion.css';
import './infoconsigne.css';
import Infoaccordion from './infoaccordion.js';
import Infoconsigne from './infoconsigne.js';

class Shooter extends Component {
  
  render() {
    return (
        <div>
            <center>
            <div>
                <GestionShooter />
            </div>
            </center>
            <div className="shooter-container">
                
                <div>
                <Infoconsigne />
                </div>
                <div id="board">
                </div>
                <div>
                <Infoaccordion />
                </div>
                
            </div>
        </div>
    );
  }
}

export default Shooter;
