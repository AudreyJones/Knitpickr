import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchProjects } from '../actions/projects'
import { Header, Button, Form } from 'semantic-ui-react'

class ProjectForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"yarn",
            materials: []
        }
    }

    handleSubmit = (event) => {
        // debugger
        console.log(this.state)
        event.preventDefault()
        //send state back to API
    //Reset form
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
        return(
            <div>
                <Form>
                    <form onSubmit={this.handleSubmit}>
                    <Header as='h1'>Create a New Project:</Header>
                    <Form.Field>
                        <input type="text" id="projectName" name="name" placeholder='Project Name' onChange={this.handleChange}/>
                    </Form.Field>
                    
                    <Button type="submit" value="Add Material" onChange={this.handleChange}>Add Project</Button>
                    </form>
                
                </Form>
            </div>
        )
    }
}

export default connect(null,{fetchProjects})(ProjectForm)