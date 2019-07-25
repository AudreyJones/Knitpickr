import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ProjectsContainer from './containers/ProjectsContainer';
import MaterialsContainer from './containers/MaterialsContainer';

import ProjectShow from './components/ProjectShow';
import MaterialShow from './components/MaterialShow';
import { connect } from 'react-redux'


class App extends Component {

    // COMPLETED: Need a projects (Index) page
    // COMPLETED: For each project, a show page which lists materials.
    // COMPLETED: form to create material, lives on project show page
    // AddMaterial form persists new material in backend
    // Finish actions/materials
    // Finish actions/projects?
    // Stretch: Ravelry API hookup
    // Stretch: Index Filter/Search by project name or material name

    componentDidMount(){
      fetch("http://localhost:3001/projects")
          .then(res => res.json())
          .then(projects => this.setState({projects}))
    }
  
    addMaterial = (name, brand, color, quantity, project_id) => {
      console.log("sent added material to API")
      const data = {name, brand, color, quantity, project_id}
      fetch("http://localhost:3001/materials", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application-json',
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(console.log())
    }

    handleOn = () => {

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
          <Route path="/materials" render = {() => (<MaterialsContainer materials = {this.state.materials}/>)}/>
          <Route path="/materials/:id" render = {({ match }) => (<MaterialShow {...this.state.materials.find(m => m.id === parseInt(match.params.id))} />)} />
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

const mapStateToProps = state => {
  return {materials: state.materials,
          projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  getActionNowAsProps: () => dispatch(addMaterials)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
