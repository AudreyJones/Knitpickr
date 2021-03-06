import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Segment, Grid, Card } from 'semantic-ui-react'; //Style Components

// importing our Action creators and { connect } to mapState and Dispatch to Props!
import {fetchProjects, addProject} from '../actions/projects';
import { connect } from 'react-redux';

// Components to be rendered in or by an event:
import ProjectCard from '../components/ProjectCard';
import ProjectForm from '../components/ProjectForm';


class ProjectsContainer extends Component {

   componentDidMount() {
      this.props.fetchProjects()
   }

     render() {
        console.log("Loaded ProjectsContainer:", this.props)
        return (
           <div>  
            <Segment>
               <ProjectForm />
            </Segment>
            <Segment>
               <Grid container columns={3} stackable>
                  {this.props.projects.map(project =>  
                     <Grid.Column>
                        <Link to={{pathname:`/projects/${project.id}`, state:{project:project}}}>
                           <ProjectCard key={project.id}  project={project} />
                        </Link>
                     </Grid.Column>   
                  )}
               </Grid>
               </Segment>
           </div>
        )
     }
}

const mapStateToProps = state => {
   console.log("mapStateToProps of ProjectContainer: ", state)
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

