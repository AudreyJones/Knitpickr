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
        console.log("handleSubmit", this.state) //Project name is here, but not the materials.
        event.preventDefault()
        debugger
        // passing the state of the form's input to #addProject (available in the form's props), to 
        this.props.addProject(this.state)
        //send state back to API
        this.setState({
            name: "",
            materials: [],
            user_id: 1
        })
    }

    handleCheckBoxChange = (event) => {
        // Once something is checked, push it into the materials array for this project that is to be created!
        debugger
        console.log(event.target)
        console.log("handleChecked state: ", this.state)
        console.log("handleChecked props: ", this.props)
        const materialsList = [...this.state.materials]
        //   debugger
          materialsList.push(event.target.value)
          this.setState({materials: materialsList})
        }

    handleChange = (event) => {
        
        console.log("handleChange state: ", this.state)
        console.log("handleChange props: ", this.props)
        // debugger
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
                        Select your materials:
                    <Grid columns={4} divided>
                        <Grid.Column >
                    {allMaterials.map(material =>
                        <div class="ui checkbox">
                        <Checkbox label={`${material.color} ${material.name}`} />
                            <input id="materialName" name={`${material.color} ${material.name}`} type="checkbox" value={`${material.color} ${material.name}`} onChange={this.handleCheckBoxChange}/>
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