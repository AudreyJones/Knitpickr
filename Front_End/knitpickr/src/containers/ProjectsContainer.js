import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchProjects} from '../actions/fetchProjects'
import Projects from '../components/Projects'

class ProjectsContainer extends Component {

    componentDidMount() {
        this.props.fetchProjects()
     }
  
     renderProjects = () => {
        // if (!!this.props.projects) {
        //    return <Projects projects={this.props.projects} />
        // } else {return null}
     }
  
     render() {
        return (
           <div>
              {this.renderProjects()}
           </div>
        )
     }




}

const mapStateToProps = state => {
    return {projects: state.projects}
 }

export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer)