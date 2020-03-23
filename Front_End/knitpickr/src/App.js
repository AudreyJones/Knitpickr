import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Container, Segment, Header, Button, Image } from 'semantic-ui-react';


// importing our various Containers and Presentational components...
import ProjectsContainer from './containers/ProjectsContainer';
import MaterialsContainer from './containers/MaterialsContainer';
import ProjectShow from './components/ProjectShow';
import MaterialShow from './components/MaterialShow';

export default class App extends Component {

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
        <Container>
            <Link to="/projects"><Button>Project Index</Button></Link>
            <Link to="/materials"><Button>Materials Index</Button></Link>
            <Segment>
              <Header as='h1' color='teal'>Knitpickr</Header>
              <Header.Subheader>Keep track of all of your yarn craft projects and notions</Header.Subheader>
            </Segment>
          <Switch>  
            <Route exact path="/materials/:id" component={MaterialShow}/>
            <Route exact path="/projects/:id" component={ProjectShow}/>
            <Route exact path="/materials" component = {MaterialsContainer}/>
            <Route exact path="/projects" component = {ProjectsContainer}/>
          </Switch>
        
        </Container> 
      </Router>
    )
  }
}
