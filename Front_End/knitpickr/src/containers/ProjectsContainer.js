import React, { Component } from 'react';
import { Grid, Container, Divider } from 'semantic-ui-react'
import ProjectShow from '../components/ProjectShow';

import {fetchProjects, addProjects} from '../actions/projects';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';
import ProjectForm from '../components/ProjectForm'

class ProjectsContainer extends Component {

   componentDidMount() {
      // debugger
      this.props.fetchProjects()
   }

   handleClick = (e) => {
      // e.preventDefault()
      console.log("This Project Card has been clicked!")
      // debugger
      // this.props.ProjectShow()
      
   }

     render() {
        console.log("Loaded ProjectsContainer", this)
        
        return (
           <div>  
           <Container textAlign='left'>
               <ProjectForm />
           </Container>
               <br />
            <Container>
               <Grid columns={3} divided>
                  {this.props.projects.map(project => 

                  <ProjectCard key={project.id} to={`/projects/${project.id}`} project={project} onClick={this.handleClick(project.id)}/>)}

               </Grid>
            </Container>
           </div>
        )
     }
}

const mapStateToProps = state => {
   console.log("state: ", state)
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

 export default connect(mapStateToProps, { fetchProjects, addProjects })(ProjectsContainer)

