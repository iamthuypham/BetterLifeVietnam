import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';

import '../css/App.css';

class App extends React.Component {
  render() {
    return (
      <Router className="app-container">
        <div className="App">
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
