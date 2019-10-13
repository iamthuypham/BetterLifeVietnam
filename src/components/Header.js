import React from 'react';

import '../css/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-section">
                  <div className="section-half left">
                      <div className="logo"></div>
                  </div>
                  <div className="section-half right">
                     <div className="social-media-links general">
                       <div className="widget facebook"></div>
                       <div className="widget twitter"></div>
                       <div className="widget youtube"></div>
                       <div className="widget instagram"></div>
                     </div>
                     <div className="donate-button general">Donate</div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Header;