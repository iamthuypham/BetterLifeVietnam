import React from 'react';

import '../css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-section">
        <div className="left">
          <a href="/" className="logo"></a>
        </div>
        <div className="right">
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

// const MobileHeader = () => {
//   return (
//     <div className="mobile-header">
//       <div className="mobile-header-section left">
//         <a href="/" className="mobile-logo"></a>
//       </div>
//       <div className="mobile-header-section right">
//         <div className="burger-menu">
//           <div className="burger-strip"></div>
//           <div className="burger-strip"></div>
//           <div className="burger-strip"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// class Header extends React.Component {
//   state = {
//     view: window.innerWidth > 400 ? <MainHeader/> : <MobileHeader/>
//   };
//   render() {
//     const view = this.state.view;
//     return (
//       view
//     );
//   }
// }

export default Header;
