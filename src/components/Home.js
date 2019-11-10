import React from 'react';

import '../css/Home.css';

class Home extends React.Component {
  windowInfo = () => {
    console.log("window.innerWidth: ", window.innerWidth);
    console.log("window.innerHeight: ", window.innerHeight);
  }
  render() {
    return (
      <div className="home-strip">
        <div 
              className="home-img"
              // onClick={this.windowInfo}
           >
          </div>
      </div>
    )
  }
}

export default Home;