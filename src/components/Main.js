// https://material-ui.com/getting-started/learn/
// https://alligator.io/react/server-side-rendering/

import React from 'react'

import Section from './Section.js'
import Button from './Button.js'
import SponsorLogo from './SponsorLogo.js'

import '../css/Main.css'

const content = [
  <SponsorLogo logo={'../images/hilton.svg'} />,
  <SponsorLogo logo={'../images/hiltonOpera.svg'} />,
  <SponsorLogo logo={'../images/waterForEveryone.svg'} />,
  <SponsorLogo logo={'../images/VietDanTravel.svg'} />
]

class Main extends React.Component {
  displayWindowInfo = () => {
    console.log('window.innerWidth: ', window.innerWidth)
    console.log('window.innerHeight: ', window.innerHeight)
  }
  render () {
    return (
      <div className='main-strip'>
        <div className='home-img'>
          <div className='tagline-button-container'>
            <div className='tagline'>Tag line</div>
            <Button
              extraStyle={{
                height: '75px',
                width: '320px',
                fontSize: '32px'
              }}
              title={`Learn More`}
            />
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
        <Section title={`Sponsors`} content={content} />
      </div>
    )
  }
}

export default Main

// https://stackoverflow.com/questions/59188624/template-not-provided-using-create-react-app
// https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router?rq=1
// https://stackoverflow.com/questions/22876978/loop-inside-react-jsx?rq=1
