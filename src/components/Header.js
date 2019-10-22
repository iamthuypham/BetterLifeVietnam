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
                      <a href="/" className="logo"></a>
                  </div>
                  <div className="section-half right">
                     <div className="social-media-links general">
                       <a href="https://facebook.com" className="widget facebook" target="_blank" style={this.state.widgetStyle}></a>
                       <a href="https://twitter.com" className="widget twitter" target="_blank" style={this.state.widgetStyle}></a>
                       <a href="https://youtube.com" className="widget youtube" target="_blank" style={this.state.widgetStyle}></a>
                       <a href="https://instagram.com" className="widget instagram" target="_blank" style={this.state.widgetStyle}></a>
                     </div>
                     <div className="donate-button" style={this.state.buttonStyle}>Donate</div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Header;