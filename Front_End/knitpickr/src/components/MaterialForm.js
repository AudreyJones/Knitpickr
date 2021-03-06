import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchMaterials, addMaterial } from '../actions/materials'
import { Header, Button, Form } from 'semantic-ui-react'

class MaterialForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"yarn",
            color:"",
            brand:"",
            quantity: 0,
            user_id: 1
        }
    }
    handleSubmit = (event) => {
        // debugger
        // console.log(this.state)
        event.preventDefault() 
        this.state.quantity = parseInt(this.state.quantity)
        // debugger
        this.props.addMaterial(this.state)
        //send state back to API
    //Reset form
        this.setState({
            name: "",
            color:"",
            brand:"",
            quantity: 0,
            user_id: 1
        })
    }

    handleChange= (event) => {
        console.log(event)
        this.setState({[event.target.name]: event.target.value})
    }

    handleSelectChange = (event) => {
        console.log("hitting handleselectChange")
        console.log(event.target.value)
        // debugger
        this.setState(
            {name: event.target.value}
        )
    }
    
    render() {
        // debugger
        return(
            <div>
                <Form>
                <form onSubmit={this.handleSubmit}>
                <Header as='h1'>Add a Material:</Header>
                    <label>Material Type: 
                    <Form.Field>
                    <select value={this.state.name} onChange={this.handleSelectChange} >
                        <option value="yarn">yarn</option>
                        <option value="hook">hook</option>
                    </select>
                    </Form.Field>
                    </label>
                    <br />
                    <Form.Field>
                    <input type="text" id="brandName" name="brand" placeholder='Brand' onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                    <input type="text" id="materialColor" name="color" placeholder='Color' onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                    <input type="number" id="materialQuantity" name="quantity" placeholder='Quantity' onChange={this.handleChange}/>
                    </Form.Field>
                    <Button input type="submit" value="Add Material">Add Material</Button>
                </form>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log("mapStateToProps of MaterialForm: ", state)
    return{
        all_Users: state.users
    }
}

export default connect(mapStateToProps,{fetchMaterials, addMaterial})(MaterialForm)