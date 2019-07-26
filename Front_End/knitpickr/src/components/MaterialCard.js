import React from 'react';
import { Card } from 'semantic-ui-react'


 const MaterialCard = (props) => {

        console.log("MaterialCard is:", props)
        const dummy = [ "Dummy Description"]
        // debugger
        return(
             <div>
                 <table>
                    <Card>
                        <Card.Content header="Header" />
                        <Card.Content description={dummy} />
                        <Card.Content extra>
                            <br />
                            Extra Content
                        </Card.Content>
                    </Card>
                </table>
             </div>
        )
    
}

export default MaterialCard
