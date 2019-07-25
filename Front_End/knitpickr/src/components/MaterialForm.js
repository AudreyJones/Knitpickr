import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addMaterial} from '../actions/materials'

class MaterialForm extends Component {

    state = {
        name:"yarn",
        color:"",
        brand:"",
        quantity:""
    }

    sendMaterial = (event) => {
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
        // event.preventDefault()
        // console.log(event)
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
                <form onSubmit={this.sendMaterial}>
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

                    <input type="submit" value="Add Material" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default connect(null,{addMaterial})(MaterialForm)