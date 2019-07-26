import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchMaterials } from '../actions/materials'
import { Header, Button, Form, Input, TextArea, Select } from 'semantic-ui-react'

class MaterialForm extends Component {

    state = {
        name:"yarn",
        color:"",
        brand:"",
        quantity:""
    }

    handleSubmit = (event) => {
        // debugger
        console.log(this.state)
        event.preventDefault()

        //send state back to API
        //clear out form
        this.setState({
            name: "",
            color:"",
            brand:"",
            quantity:""
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
                <Header as='h1'>Add a Material:</Header>
                    <label>Material Name/Type: 
                    <select value={this.state.name} onChange={this.handleSelectChange} >
                        <option value="yarn">yarn</option>
                        <option value="hook">hook</option>
                    </select>
                    </label>

                    <label>Brand
                    <input type="text" id="brandName" name="brand" onChange={this.handleChange}/>
                    </label>

                    <label>Color
                    <input type="text" id="materialColor" name="color" onChange={this.handleChange}/>
                    </label>

                    <label>Quantity
                    <input type="text" id="materialQuantity" name="quantity" onChange={this.handleChange}/>
                    </label>

                    <Button input type="submit" value="Add Material" onChange={this.handleChange}>Add Material</Button>
                </form>
                </Form>
            </div>
        )
    }
}

export default connect(null,{fetchMaterials})(MaterialForm)