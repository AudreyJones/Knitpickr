import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


// importing our various Containers and Presentational components...
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
    console.log("App.js state:", this)
    // debugger
    return (
      <Router>
      <div>
        <Link to="/projects"><button>Project Index</button></Link>
        <Link to="/materials"><button>Materials Index</button></Link>
        
        <Switch>  
          <Route exact path="/materials/:id" component={MaterialShow}/>
          <Route exact path="/projects/:id" component={ProjectShow}/>
          <Route exact path="/materials" component = {MaterialsContainer}/>
          <Route exact path="/projects" component = {ProjectsContainer}/>
        </Switch>
      
      </div> 
      </Router>
    )
  }
}

export default App
