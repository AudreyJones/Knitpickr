import React, { Component } from 'react'

// import { connect } from 'react-redux'
// import {fetchProjects} from '../actions/fetchProjects'
// import Projects from '../components/Projects'

export default class ProjectsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/projects")
        .then(res => res.json())
        .then(projects => this.setState({projects}))
     }
  
    //  renderProjects = () => {
    //     // if (!!this.props.projects) {
    //     //    return <Projects projects={this.props.projects} />
    //     // } else {return null}
    //  }
  
     render() {
        // debugger
        return (
           <ul>
              {this.state.projects.map(project => <li> {project.name} </li>)}
           </ul>
        )
     }




}

// const mapStateToProps = state => {
//     return {projects: state.projects}
//  }

// export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer)