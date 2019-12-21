import React from 'react'

import '../css/SponsorLogo.css'

class SponsorLogo extends React.Component {
  render () {
    return <div className='sponsor-logo' style={{
        height: '91px',
        width: '155px',
        backgroundImage: 'url(' + this.props.logo + ')',
        backgroundSize: 'cover',
        border: '1px solid purple'
    }}></div>
  }
}

export default SponsorLogo;
