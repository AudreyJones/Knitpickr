import React from 'react';
import { Card, Image } from 'semantic-ui-react'


 const MaterialCard = (props) => {
        // console.log("MaterialCard is:", props)

    const yarnPic = "https://marymaxim.cdn.speedyrails.net/media/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/5/5/554-rose-wrapped_1.jpg"
    const hookPic = "https://yarn-cdn-weblinc.netdna-ssl.com/product_images/knitters-pride-bamboo-crochet-hook-set/579f830369702d366f0099d7/zoom.jpg?c=1471556621"

        return(
             <Card>
                 {props.material.name === 'yarn' && <Image src={yarnPic} />}
                {props.material.name === 'hook' && <Image src={hookPic} />}
                 
                 
                
                    <Card.Content >
                        <Card.Header >
                             {props.material.color} {props.material.name}
                            </Card.Header>
                        </Card.Content>

                    <Card.Content extra>
                        {props.material.brand}
                        <br />
                        {props.material.quantity} units
                    </Card.Content>
                    </Card>
        )
    
}

export default MaterialCard
