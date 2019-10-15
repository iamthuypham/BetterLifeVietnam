import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Header from './Header.js';
import Navbar from './Navbar.js';

import '../css/App.css';

class App extends React.Component {
  render() {
    return (
      <Router className="app-container">
        <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/"  component={Home} />
            <Route path="/about"  component={About} />
            <Route path="/contact"  component={Contact} />
            <Route path="/projects"  component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
