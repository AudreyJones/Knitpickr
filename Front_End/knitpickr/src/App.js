import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// importing our various Containers and Presentational components...
import ProjectsContainer from './containers/ProjectsContainer';
import MaterialsContainer from './containers/MaterialsContainer';
import ProjectShow from './components/ProjectShow';
import MaterialShow from './components/MaterialShow';

// importing our Action creators and { connect } to mapState and Dispatch to Props!


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

        <Link to="/"><button>Project Index</button></Link>
        <Link to="/materials"><button>Materials Index</button></Link>
        

        <Switch>  
          <Route exact path="/materials/:id" render = {({ match }) => (<MaterialShow {...this.state.materials.find(m => m.id === parseInt(match.params.id))} />)} />
          <Route exact path="/projects/:id" render = {({ match }) => (<ProjectShow addMaterial = {this.addMaterial} {...this.state.projects.find(p => p.id === parseInt(match.params.id))} />)} />
          <Route exact path="/materials" component = {MaterialsContainer}/>
          <Route exact path="/"  component = {ProjectsContainer} />
          
        </Switch>
      
      </div> 
      </Router>
    )
  }
}

export default App
