import React from 'react'

import '../css/Main.css'
// okay so let's try something here...
// going for a single strip -> Main
// links will redirect to corresponding points on
// Main strip -> so let's import one and see...
// okay so that worked--with the exact effect I wanted
// perhaps a bit convoluted but then again we can
// always fix later
class Main extends React.Component {
  windowInfo = () => {
    console.log('window.innerWidth: ', window.innerWidth)
    console.log('window.innerHeight: ', window.innerHeight)
  }
  render () {
    return (
      <div className='main-strip'>
        <div className='home-img' />
        <div className='home-section'>
          <div className='home-section-strip'>Our Mission</div>
          <div className='home-section-strip' >
            Working to improve education conditions 
            for underprivileged children and youth in Vietnam.
          </div>
          <div className='home-section-strip'>
            Sponsors
          </div>
          <div className='logos'>
            <div className="whattheheck">Hi!</div>
            <div className="whattheheck">Hi!</div>
            <div className="whattheheck">Hi!</div>
            <div className="whattheheck">Hi!</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
