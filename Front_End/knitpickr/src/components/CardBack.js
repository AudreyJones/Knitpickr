import React from 'react';
import { Card, Button } from 'semantic-ui-react'



function CardBack(props) {
            // console.log("CardBack state", this.state)
            console.log("CardBack props", props)
            const comments = props.comments.comments.map( comment => {
                return comment
            })
        return(
            <Card>
                    <Card.Content>
                        Manufacturer: {props.material.brand}
                    <br />
                        Quantity: {props.material.quantity}
                    <br />
                        <Card.Description>
                            Comments: 
                            <ul>
                                {comments.map(comment => 
                                <li>{comment}</li>
                                )}
                            </ul>
                            <Button onClick={props.handleLike}>Like</Button>
                                {props.liked}
                        </Card.Description>
                </Card.Content>
            </Card>
        )      
}

export default CardBack;