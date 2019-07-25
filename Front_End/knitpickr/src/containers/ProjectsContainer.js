import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {fetchProjects} from '../actions/projects';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';

class ProjectsContainer extends Component {

   componentDidMount() {
      // debugger
      this.props.fetchProjects()
   }

     render() {
        console.log("Loaded Projects Container")
        console.log(this)

        return (
           <div>
            <ProjectCard />
            {/*  {this.props.projects.map(project => <li key={project.id}> <Link to={`/projects/${project.id}`}> {project.name} </Link> </li> )}*/}
           </div>
        )
     }
}

const mapStateToProps = state => {
   return {
           projects: state.projects
   }
 }
 
 const mapDispatchToProps = dispatch => ({
   
      fetchProjects: projects => dispatch({type: 'FETCHING_PROJECTS', projects})
  
 })

//  const mapDispatchToProps = dispatch => ({

//    // deleteFromWishList: id => dispatch({type: "DELETE_FROM_WISH",id}),
//    vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId}),
//    deleteFromWish: vehicleId => dispatch({type: 'DELETE_FROM_WISH',vehicleId})
//   })

 export default connect((mapStateToProps, mapDispatchToProps), { fetchProjects })(ProjectsContainer)

