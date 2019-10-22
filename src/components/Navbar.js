import React from 'react';

import '../css/Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <a href="/about" className="navbar-button">About Us</a>
                <a href="/" className="navbar-button">Ways to Help</a>
                <a href="/projects" className="navbar-button">Our Projects</a>
                <a href="/contact" className="navbar-button">Contact Us</a>
            </div>
        )
    }
}

export default Navbar;