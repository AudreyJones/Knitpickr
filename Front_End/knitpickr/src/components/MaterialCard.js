import React from 'react';
import { Card, Image } from 'semantic-ui-react'


 const MaterialCard = (props) => {

        console.log("MaterialCard is:", props)
        const dummy = [ "Dummy Description"]
        // debugger
        return(
             <Card>
                <Image src="https://www.frlib.org/site-assets/images/images/Knittingballsofyarm.jpg/" />
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
