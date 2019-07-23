import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ProjectsContainer from './containers/ProjectsContainer';
import ProjectShow from './components/ProjectShow';
// import logo from './logo.svg';
import './App.css';
// import Projects from './components/Projects';

export default class App extends Component {

    // Index Filter by project name or material name
    // Need a projects (Index) page
    // For each project, a show page which lists materials.
    // form for sign up, lives on project show

    state = {
      projects: []
    }
  
    
    componentDidMount() {
    fetch("http://localhost:3001/projects")
        .then(res => res.json())
        .then(projects => this.setState({projects}))
  }
  render() {
    return (
      <Router>
      <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/new"><button>New Project</button></Link>
        <Switch>
          <Route path="/" render= { () => (<ProjectsContainer projects = {this.state.projects}/>)}/>
          <Route path="/projects/:id" render={({ match }) => (<ProjectShow {...this.state.projects.find(proj => proj.id === parseInt(match.params.id))} />)} />
          {/* Match gives us access to the id, and  */}
        </Switch>
      
      
      </div>
      </Router>
    )
  }
}
