import React from 'react';

import '../css/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-section">
                  <div className="section-half left">
                      <a href="/" className="logo"></a>
                  </div>
                  <div className="section-half right">
                     <div className="social-media-links general">
                       <a href="https://facebook.com" className="widget facebook" target="_blank"></a>
                       <a href="https://twitter.com" className="widget twitter" target="_blank"></a>
                       <a href="https://youtube.com" className="widget youtube" target="_blank"></a>
                       <a href="https://instagram.com" className="widget instagram" target="_blank"></a>
                     </div>
                     <div className="donate-button">Donate</div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Header;