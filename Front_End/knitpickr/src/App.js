import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// importing our various Containers and Presentational components...
import ProjectsContainer from './containers/ProjectsContainer';
import MaterialsContainer from './containers/MaterialsContainer';
import ProjectShow from './components/ProjectShow';
import MaterialShow from './components/MaterialShow';

// importing our Action creators and { connect } to mapState and Dispatch to Props!


class App extends Component {

    // To Do: 
    // AddMaterial form persists new material in backend
    // Stretch: Ravelry API hookup
    // Stretch: Index Filter/Search by project name or material name

    componentDidMount(){
      fetch("http://localhost:3001/projects")
          .then(res => res.json())
          .then(projects => this.setState({projects}))
    }
  
    // POST request for data persistence
    // addMaterial = (name, brand, color, quantity, project_id) => {
    //   console.log("sent added material to Rails API")
    //   const data = {name, brand, color, quantity, project_id}
    //   fetch("http://localhost:3001/materials", {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type' : 'application-json',
    //     },
    //     body: JSON.stringify(data)
    //   })
    //   .then(resp => resp.json())
    //   .then(console.log())
    // }
    
    

  render() {
    console.log("Loaded App")
    console.log(this.state)
    console.log(this.props)
    // debugger
    return (
      <Router>
      <div>

        <Link to="/"><button>Home</button></Link>
        {/* <Link to="/new"><button>New Project</button></Link> */}
        <Link to="/materials"><button>Materials Index</button></Link>
        <Link to="/projects/favorited"><button>Favorited Projects</button></Link>

        <Switch>  
          <Route path="/materials" render = {() => (<MaterialsContainer/>)}/>
          <Route path="/materials/:id" render = {({ match }) => (<MaterialShow {...this.state.materials.find(m => m.id === parseInt(match.params.id))} />)} />
          <Route path="/projects/:id" render = {({ match }) => (<ProjectShow addMaterial = {this.addMaterial} {...this.state.projects.find(p => p.id === parseInt(match.params.id))} />)} />
          <Route path="/" render = { () => (<ProjectsContainer projects = {this.state.projects}/>)} />
          
        </Switch>
      
      </div> 
      </Router>
    )
  }
}

export default App
