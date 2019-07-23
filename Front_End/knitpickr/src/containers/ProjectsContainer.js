import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// import { connect } from 'react-redux';
// import {fetchProjects} from '../actions/fetchProjects';
// import Projects from '../components/Projects';

export default class ProjectsContainer extends Component {

    //  renderProjects = () => {
    //     // if (!!this.props.projects) {
    //     //    return <Projects projects={this.props.projects} />
    //     // } else {return null}
    //  }
  
     render() {
        // debugger
        return (
           <ul>
              {this.props.projects.map(project => <li key={project.id}> <Link to={`projects/${project.id}`}>{project.name}</Link> </li>)}
              {/* REALLY NICE example of nested syntax here with the Link to path! */}
           </ul>
        )
     }




}

// const mapStateToProps = state => {
//     return {projects: state.projects}
//  }

// export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer)