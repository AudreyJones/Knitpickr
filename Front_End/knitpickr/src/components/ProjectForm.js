import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchProjects } from '../actions/projects'
import { Button, Form } from 'semantic-ui-react'

class ProjectForm extends Component {

    state = {
        name:"yarn",
        materials: []
    }

    handleSubmit = (event) => {
        // debugger
        console.log(this.state)
        event.preventDefault()

        //send state back to API
        //clear out form
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
                    <Form.Field>
                    <label>Material Name/Type: 
                    <select value={this.state.name} onChange={this.handleSelectChange} >
                        <option value="yarn">yarn</option>
                        <option value="hook">hook</option>
                    </select>
                    </label>
                    </Form.Field>

                    <Form.Field>
                    <label>Brand
                    <input type="text" id="brandName" name="brand" onChange={this.handleChange}/>
                    </label>
                    </Form.Field>

                    <label>Color
                    <input type="text" id="materialColor" name="color" onChange={this.handleChange}/>
                    </label>

                    <label>Quantity
                    <input type="text" id="materialQuantity" name="quantity" onChange={this.handleChange}/>
                    </label>

                    <Button type="submit" value="Add Material" onChange={this.handleChange}>Add Project</Button>
                </form>
                </Form>
            </div>
        )
    }
}

export default connect(null,{fetchProjects})(ProjectForm)