import React, {Component} from 'react';
import { Card, Form, Button, Grid } from 'semantic-ui-react'
import CardFront from './CardFront'
import CardBack from './CardBack'
// import ReactCardFlip from 'react-card-flip';


// Class component, because it needs to hold state of whether or not this particular card has been Flipped or not!
 class MaterialCard extends Component {
    constructor() {
        super()
            this.state = {
               isFlipped: false,
               comment: "",
               comments:[]
            }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
            e.preventDefault();
            console.log("Current state: ", this.state)
            this.setState(prevState => ({isFlipped: !prevState.isFlipped }));
    }

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
          });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        debugger //Before comments array change
        this.setState({...this.state, ...this.state.comments.push(this.state.comment)});
        debugger //After comments array change
        //Need to reset form input field after state update!!
        this.setState({comment:""})
        debugger //After resetting form field
      }

    render() {
        // console.log("MaterialCard state:", this.state); 
        // console.log("MaterialCard props:", this.props);
        // debugger
        
        const cardState = this.state.isFlipped
        let cardFace;
        if (cardState === true) {
            cardFace = <CardBack material={this.props.material} comments={this.state}/>
        } else {
            cardFace = <CardFront material={this.props.material}/>
            
        }

        return(
            <React.Fragment>
            <Card onClick={this.handleClick}>
                {cardFace}
                
            </Card>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Care to Comment?</label>
                    <input placeholder="Enter Comment" name="comment" value={this.state.comment} onChange={this.handleChange}/>
                </Form.Field>
                     <Button type="submit" value="Submit">Submit</Button>
            </Form>
            </React.Fragment>
        
        )
    }
    
}

export default MaterialCard
