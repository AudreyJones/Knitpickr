import React, {Component} from 'react';
import { Card, Form, Button, Transition, Segment } from 'semantic-ui-react'
import CardFront from './CardFront'
import CardBack from './CardBack'
// import ReactCardFlip from 'react-card-flip';


// Class component, because it needs to hold state of whether or not this particular card has been Flipped or not!
 class MaterialCard extends Component {
    constructor() {
        super()
            this.state = {
                animation: 'horizontal flip',
                duration: 50000, 
                visible: true,
                isClicked: false,
                isFlipped: false,
                comment: "",
                comments:[],
                liked: 0
            }
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
            event.preventDefault();
            console.log("Current state: ", this.state)
            this.setState(prevState => ({isFlipped: !prevState.isFlipped }));
    }

    handleLike = (event) => {
        event.preventDefault()
        this.setState({liked: this.state.liked + 1});
        // debugger
    }

    handleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
          });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // debugger //Before comments array change
        this.setState({...this.state, ...this.state.comments.push(this.state.comment)});
        // debugger //After comments array change
        //Need to reset form input field after state update!!
        this.setState({comment:""})
        // debugger //After resetting form field
      }

    render() {
        // console.log("MaterialCard state:", this.state); 
        // console.log("MaterialCard props:", this.props);
        // debugger
        // const { animation, duration, visible } = this.state
        
        const cardState = this.state.isFlipped
        let cardFace;
        
        if (cardState === true) {
            cardFace = 
                <CardBack material={this.props.material} comments={this.state} liked={this.state.liked} handleLike={this.handleLike}/>
        } else {
            cardFace = 
                <CardFront material={this.props.material}/>
        }

        return(
            <React.Fragment>

            <Transition.Group visible={this.handleVisibility} animation={this.state.animation} duration={this.state.duration} >
                <Card>
                    {cardFace}
                <Card.Content extra>
                    <Button onClick={this.handleClick} fluid>Flip!</Button>
                </Card.Content>
                </Card>
            </Transition.Group>
            
            {/* <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Comments:</label>
                    <input placeholder="Enter Comment" name="comment" value={this.state.comment} onChange={this.handleChange}/>
                </Form.Field>
                     <Button type="submit" value="Submit">Submit</Button>
            </Form> */}
            

            {/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <CardFront key="front">
            This is the front of the card.
            <button onClick={this.handleClick}>Click to flip</button>
            </CardFront>
    
            <CardBack key="back">
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
            </CardBack>
            </ReactCardFlip> */}

            </React.Fragment>
        
        )
    }
    
}

export default MaterialCard
