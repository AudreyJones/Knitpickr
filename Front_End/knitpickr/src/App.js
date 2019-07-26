import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// importing our various Containers and Presentational components...
import Login from './components/Login'
import ProjectsContainer from './containers/ProjectsContainer';
import MaterialsContainer from './containers/MaterialsContainer';
import ProjectShow from './components/ProjectShow';
import MaterialShow from './components/MaterialShow';




class App extends Component {

    componentDidMount(){
      fetch("http://localhost:3001/projects")
          .then(res => res.json())
          .then(projects => this.setState({projects}))
    }
    

  render() {
    console.log("Loaded App")
    // debugger
    return (
      <Router>
      <div>
        {/* If user is logged in, do not show this link */}
        <Link to="/"><button>Login</button></Link>
        <Link to="/projects"><button>Project Index</button></Link>
        <Link to="/materials"><button>Materials Index</button></Link>
        
      
    

        <Switch>  
          <Route exact path="/materials/:id" render = {({ match }) => (<MaterialShow {...this.state.materials.find(m => m.id === parseInt(match.params.id))} />)} />
          <Route exact path="/projects/:id" render = {({ match }) => (<ProjectShow addMaterial = {this.addMaterial} {...this.state.projects.find(p => p.id === parseInt(match.params.id))} />)} />
          <Route exact path="/materials" component = {MaterialsContainer}/>
          <Route exact path="/projects" component = {ProjectsContainer}/>
          <Route exact path="/" component={Login} />
          
        </Switch>
      
      </div> 
      </Router>
    )
  }
}

export default App
