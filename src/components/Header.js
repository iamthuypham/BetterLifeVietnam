import React from 'react';

import '../css/Header.css';

class Header extends React.Component {
    state = {
        leftHalfStyle: {
            height: ((100 * 120) / window.innerHeight).toString() + 'vh',
            width: ((100 * 528) / window.innerWidth).toString() + 'vw'
        },
        widgetStyle: {
            height: ((100 * 50) / window.innerHeight).toString() + 'vh',
            width: ((100 * 50) / window.innerWidth).toString() + 'vw'
        },
        buttonStyle: {
            height: ((100 * 75) / window.innerHeight).toString() + 'vh',
            width: ((100 * 254) / window.innerWidth).toString() + 'vw',
            borderRadius: (10 / 16).toString() + 'em',
            fontSize: (25 / 16).toString() + 'em'
        }
    }
    render() {
        return (
            <div className="header">
                <div className="header-section">
                  <div className="section-half left" style={this.state.leftHalfStyle}>
                      <div className="logo"></div>
                  </div>
                  <div className="section-half right">
                     <div className="social-media-links general">
                       <div className="widget facebook" style={this.state.widgetStyle}></div>
                       <div className="widget twitter" style={this.state.widgetStyle}></div>
                       <div className="widget youtube" style={this.state.widgetStyle}></div>
                       <div className="widget instagram" style={this.state.widgetStyle}></div>
                     </div>
                     <div className="donate-button" style={this.state.buttonStyle}>Donate</div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Header;