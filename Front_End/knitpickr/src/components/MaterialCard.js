import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'
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

    render() {
        console.log("MaterialCard state:", this.state); 
        console.log("MaterialCard props:", this.props);
        // debugger
        
        const cardState = this.state.isFlipped
        let cardFace;
        if (cardState === true) {
            cardFace = <CardBack material={this.props.material} comments={this.state}/>
        } else {
            cardFace = <CardFront material={this.props.material}/>
        }

        return(
            <Card onClick={this.handleClick}>
                {cardFace}
            </Card>
        )
    }
    
}

export default MaterialCard
