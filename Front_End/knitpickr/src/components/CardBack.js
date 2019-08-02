import React from 'react';
import { Card } from 'semantic-ui-react'


// Functional component, because it does not need a state, and is only concerned with displaying of information
function CardBack(props) {
    console.log("CardBack props", props)
    const comments = props.comments.comments.map( comment => {
        return comment
    })
        return(
            <div>
                <Card>
                    <Card.Content>
                        Made by: {props.material.brand}
                    <br />
                        Quantity: {props.material.quantity}
                    <br />
                        <Card.Description>
                            Comments: {comments}
                        </Card.Description>
                </Card.Content>
                </Card>
            </div>
        )        
}

export default CardBack;