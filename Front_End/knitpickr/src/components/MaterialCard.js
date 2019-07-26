import React from 'react';
import { Card } from 'semantic-ui-react'


 const MaterialCard = (props) => {

        console.log("MaterialCard is:", props)
        
        // debugger
        return(
             <div>
                 <table>
                    <Card>
                        <Card.Content header="Header" />
                        <Card.Content description="Description" />
                        <Card.Content extra>
                            
                        </Card.Content>
                    </Card>
                </table>
             </div>
        )
    
}

export default MaterialCard
