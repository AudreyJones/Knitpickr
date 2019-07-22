import React, from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ProjectsContainer from './containers/ProjectsContainer';
import ProjectShow from './components/ProjectShow'
// import logo from './logo.svg';
import './App.css';
// import Projects from './components/Projects';

function App() {
  
    // Index Filter by project name or material name
    // Need a projects (Index) page
    // For each project, a show page which lists materials.
    // form for sign up, lives on project show

  return (
    <Router>
    <div>
      <Link to="/"><button>Home</button></Link>
      <Link to="/new"><button>New Project</button></Link>
      <Switch>
        <Route path="/" component= { ProjectsContainer}/>
        <Route path="/project/id" render={}>
      </Switch>
    
    
    </div>
    </Router>
  );
}

export default App;
