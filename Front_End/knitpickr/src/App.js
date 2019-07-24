import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ProjectsContainer from './containers/ProjectsContainer';
import ProjectShow from './components/ProjectShow';
// import logo from './logo.svg';
// import Projects from './components/Projects';

export default class App extends Component {

    // Index Filter by project name or material name
    // Need a projects (Index) page
    // For each project, a show page which lists materials.
    // form for sign up, lives on project show

    state = {
      projects: [],
    }
  
    addMaterial = (name, brand, color, quantity, project_id) => {
      const data = {name: brand: color: quantity: project_id:}
      console.log(name.value, brand.value, color.value, quantity.value, project_id)
      fetch("http://localhost:3001/materials", {
        method: POST,
        headers: {
          'Content-Type' : 'application-json',
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(console.log())
    }
    
    componentDidMount(){
    fetch("http://localhost:3001/projects")
        .then(res => res.json())
        .then(projects => this.setState({projects}))
  }
  render() {
    console.log("Loaded App")
    console.log(this.state)
    return (
      <Router>
        {this.state.projects.length > 0 ?
      <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/new"><button>New Project</button></Link>
        <Link to="/materials"><button>Materials Index</button></Link>
        <Link to="/projects/favorited"><button>Favorited Projects</button></Link>
        <Switch>

          <Route path="/projects/:id" render = {({ match }) => (<ProjectShow addMaterial = {this.addMaterial} {...this.state.projects.find(p => p.id === parseInt(match.params.id))} />)} />
          <Route path="/" render = { () => (<ProjectsContainer projects = {this.state.projects}/>)} />
          {/* Match gives us access to the id, and  */}
        </Switch>
      
      
      </div> : <h1>Projects are Loading...</h1>
        }
      </Router>
    )
  }
}
