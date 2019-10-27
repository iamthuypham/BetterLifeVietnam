import React from 'react';

import '../css/Header.css';

const MainHeader = () => {
  return (
    <div className="header">
      <div className="header-section">
        <div className="section-half left">
          <a href="/" className="logo"></a>
        </div>
        <div className="section-half right">
          <div className="social-media-links general">
            <a
              href="https://facebook.com"
              className="widget facebook"
              target="_blank"
            ></a>
            <a
              href="https://twitter.com"
              className="widget twitter"
              target="_blank"
            ></a>
            <a
              href="https://youtube.com"
              className="widget youtube"
              target="_blank"
            ></a>
            <a
              href="https://instagram.com"
              className="widget instagram"
              target="_blank"
            ></a>
          </div>
          <div className="donate-button">Donate</div>
        </div>
      </div>
    </div>
  );
};

const MobileHeader = () => {
    return (
        <div className="mobile-header">
            <div className="mobile-header-section">
                <a href="/" className="mobile-logo"></a>
            </div>
        </div>
    )
}

class Header extends React.Component {
    state = {
        mobile: window.innerWidth > 500
    }
    render() {
        return (
            <MainHeader/>
        )
    }
}

export default Header;
