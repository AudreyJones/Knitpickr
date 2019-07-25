import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {fetchProjects} from '../actions/projects';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';

export default class ProjectsContainer extends Component {

     render() {
        console.log("Loaded Projects Container")
        console.log("ProjectsContainer State", this.state.projects)

        return (
           <ul>
              Project Cards should be here instead of Links!
              {this.props.projects.map(project => <li key={project.id}> <Link to={`/projects/${project.id}`}> {project.name} </Link> </li>)}
           </ul>
            
        )
     }
}

const mapStateToProps = state => {
   return {materials: state.materials,
           projects: state.projects
   }
 }
 
 const mapDispatchToProps = dispatch => {
   getActionNowAsProps: () => dispatch(fetchProjects)
 }

 export default connect(mapStateToProps,{ fetchProjects })(ProjectsContainer)

