import React from 'react';

import '../css/Navbar.css';

class Navbar extends React.Component {
    state = {
        navbarStyle: {
            fontSize: (20 / 16).toString() + 'em'
        }
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar-button">About Us</div>
                <div className="navbar-button">Ways to Help</div>
                <div className="navbar-button">Our Projects</div>
                <div className="navbar-button">Contact Us</div>
            </div>
        )
    }
}

export default Navbar;