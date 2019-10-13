import React from 'react';
import Header from './Header.js';
import Navbar from './Navbar.js';

import '../css/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home page">
                <Header />
                <Navbar />
                <div className="home-splash">
                    Home Splash
                </div>
            </div>
        );
    }
}

export default Home; 