import React from 'react';
import { Card } from 'semantic-ui-react'



function CardBack(props) {
            // console.log("CardBack state", this.state)
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
                            Comments: 
                            <ul>
                                {comments.map(comment => 
                                <li>{comment}</li>
                                )}
                            </ul>
                            <button onClick={props.handleLike}>Like</button>
                            <br />
                                {props.liked}
                        </Card.Description>
                </Card.Content>
                </Card>
            </div>
        )      
}

export default CardBack;