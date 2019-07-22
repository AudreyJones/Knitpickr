import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import ProjectsContainer from './containers/ProjectsContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoaded: false
    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
          Does this Display?
      </header>
    </div>
  );
  }
}

export default App;
