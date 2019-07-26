import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Divider, Card } from 'semantic-ui-react'; //Style Components

// importing our Action creators and { connect } to mapState and Dispatch to Props!
import {fetchProjects, addProject} from '../actions/projects';
import { connect } from 'react-redux';

// Components to be rendered in or by an event:
import ProjectCard from '../components/ProjectCard';
import ProjectForm from '../components/ProjectForm';
import ProjectShow from '../components/ProjectShow';


class ProjectsContainer extends Component {

   componentDidMount() {
      this.props.fetchProjects()
   }

     render() {
        console.log("Loaded ProjectsContainer:", this.props)
        return (
           <Container>  
           <Divider />
            <ProjectForm />
            <Divider />
          <br />
          <br />
            <Card.Group itemsPerRow={4}>       
               <div className="ui five stackable cards"></div>         
                  {this.props.projects.map(project => <Link to={`/projects/${project.id}`}><ProjectCard key={project.id}  project={project} /></Link>)}
            </Card.Group> 
           </Container>
        )
     }
}

const mapStateToProps = state => {
   console.log("mapStateToProps: ", state)
   // debugger
   return {
      // Naming the prop held by the ProjectsContainer and what we're filling it with.
           projects: state.projects.projects
   }
 }
 
//  const mapDispatchToProps = dispatch => ({
//       fetchProjects: projects => dispatch({type: 'FETCHING_PROJECTS', projects})
  
//  })

//  const mapDispatchToProps = dispatch => ({

//    // deleteFromWishList: id => dispatch({type: "DELETE_FROM_WISH",id}),
//    vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId}),
//    deleteFromWish: vehicleId => dispatch({type: 'DELETE_FROM_WISH',vehicleId})
//   })

 export default connect(mapStateToProps, { fetchProjects, addProject })(ProjectsContainer)

