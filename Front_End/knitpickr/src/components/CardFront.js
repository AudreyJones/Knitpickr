import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react'




// Functional component, because it does not need a state, and is only concerned with displaying of information
function CardFront(props) {
        // console.log("CardFront props", props.material)
        // debugger
        const yarnPic = "https://marymaxim.cdn.speedyrails.net/media/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/5/5/554-rose-wrapped_1.jpg"
        const hookPic = "https://yarn-cdn-weblinc.netdna-ssl.com/product_images/knitters-pride-bamboo-crochet-hook-set/579f830369702d366f0099d7/zoom.jpg?c=1471556621"

        
       
        return(
                <Card>
                        {props.material.name === 'yarn' && <Image src={yarnPic} size='small' wrapped/>}
                        {props.material.name === 'hook' && <Image src={hookPic} size='small' wrapped/>}
                    <Card.Content>
                        <Card.Header>
                            {props.material.color} {props.material.name}
                        </Card.Header>
                        <Card.Meta>{props.material.brand}</Card.Meta>
                        <Button fluid>Flip!</Button>
                    </Card.Content>
                </Card> 
        )
}
export default CardFront;