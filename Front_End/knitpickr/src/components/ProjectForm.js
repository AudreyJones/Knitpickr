import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchProjects, addProject } from '../actions/projects'
import { fetchMaterials } from '../actions/materials'
import { Header, Button, Form, Checkbox, Grid } from 'semantic-ui-react'

class ProjectForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name:"yarn",
            materials: [],
            user_id: 1
        }
    }

    componentDidMount() {
        this.props.fetchMaterials()
     }

    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault()
        debugger
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

    render() {
        console.log('Project Form Props:', this.props)
        const allMaterials = this.props.all_Materials.materials
        
        return(
            <div>
                <Form>
                    <form onSubmit={this.handleSubmit}>
                    <Header as='h1'>Create a New Project:</Header>
                    <Form.Field>
                        <input type="text" id="projectName" name="name" placeholder='Project Name' onChange={this.handleChange}/>
                    </Form.Field>
                    {/* Iterate over all materials and make them available for selection! */}
                    <Form.Field>
                    <Grid columns={4} divided>
                        <Grid.Column >
                    {allMaterials.map(material =>
                        <div class="ui checkbox">
                        <Checkbox label={`${material.color} ${material.name}`} />
                            <input type="checkbox" class="hidden"  tabindex="0" onChange={this.handleChange}/>
                        </div>
                    )}
                        </Grid.Column>
                        
                    </Grid>
                    </Form.Field>
                    <Button type="submit">Add Project</Button>
                    </form>
                
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps of ProjectForm: ", state)
    return{
        all_Materials: state.materials, all_projects: state.projects
    }
}

export default connect(mapStateToProps,{fetchProjects, addProject, fetchMaterials})(ProjectForm)