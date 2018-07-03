import React, { Component } from 'react';
import NavBar from  './NavBar/NavBar';
import Welcome from  './Welcome/Welcome';
import ProjectList from  './ProjectList/ProjectList';
import About from  './About/About';
import Contact from  './Contact/Contact';


import classes from './App.css';

class App extends Component {
  render() {
    return (
        <div className={classes.app}>
          <NavBar/>
          <Welcome/>
          <ProjectList />
          <About />
          <Contact />
        </div>
    );
  }
}

export default App;
