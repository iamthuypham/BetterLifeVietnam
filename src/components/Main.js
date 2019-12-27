import React from 'react'

import Button from '@material-ui/core/Button'

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
        <div className='home-img'>
          <div className='tagline-button-container'>
            <div className='tagline'>Tag line</div>
            <div className='learn-more'>
              <Button
                style={{
                  height: '100%',
                  borderRadius: '10px',
                  backgroundColor: 'ff8e3a',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: '24px',
                  textTransform: 'none'
                }}
                fullWidth='true'
                color='secondary'
                variant='contained'
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='home-section-strip bold-style'>Our Mission</div>
          <div className='home-section-strip education'>
            <div className='quotation-mark'>"</div>
            Working to improve education conditions for underprivileged children
            and youth in Vietnam.
            <div className='quotation-mark'>"</div>
          </div>
          <div className='home-section-strip'></div>
          <div className='home-section-strip bold-style'>Sponsors</div>
          <div className='home-logos'>
            <div className='home-logo hilton'></div>
            <div className='home-logo hilton-opera'></div>
            <div className='home-logo water-for-all'></div>
            <div className='home-logo Viet-Dan-travel'></div>
          </div>
        </div>
        <div className='section'></div>
      </div>
    )
  }
}

export default Main
