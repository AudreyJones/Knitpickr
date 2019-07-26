import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchProjects, addProject } from '../actions/projects'
import { Header, Button, Form, Checkbox } from 'semantic-ui-react'

class ProjectForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"yarn",
            materials: [],
            user_id: 1
        }
    }

    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault()
        this.props.addProject(this.state)
        //send state back to API
        this.setState({
            name: "",
            materials: []
        })
    }

    handleChange= (event) => {
        event.preventDefault()
        console.log(event)
        this.setState({[event.target.name]: event.target.value})
    }

    handleSelectChange = (event) => {
        console.log("hitting handleselectChange")
        console.log(event.target.value)
        this.setState(
            {name: event.target.value}
        )
    }

    render() {
        console.log('Project Form Props:', this.props)
        return(
            <div>
                <Form>
                    <form onSubmit={this.handleSubmit}>
                    <Header as='h1'>Create a New Project:</Header>
                    <Form.Field>
                        <input type="text" id="projectName" name="name" placeholder='Project Name' onChange={this.handleChange}/>
                    </Form.Field>
                    {/* Iterate over all materials and make them available for selection! */}
                    
                    {/* <Form.Field>
                        <Checkbox label={{ children: 'A Material' }} />
                    </Form.Field> */}

                    <Button type="submit" value="Add Material" onChange={this.handleChange}>Add Project</Button>
                    </form>
                
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps of ProjectForm: ", state)
    return{
        all_Users: state.users
    }
}

export default connect(mapStateToProps,{fetchProjects, addProject})(ProjectForm)