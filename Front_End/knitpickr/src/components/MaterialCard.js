import React from 'react';
import { Card } from 'semantic-ui-react'

export default function MaterialCard(props) {
    console.log({props})
    // var tableStyle = {
    //     // "border": "1px solid",
    //     margin: '40px',
    //     padding: '10px' ,
    //     width: '100%',
    //     // text-align:'center'
    //  };
        return(
            <div>
                <table>
                    const MaterialCard = () => (
                    <Card>
                        <Card.Content header='Material Card' />
                        <Card.Content description="Description" />
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </table>
            </div>
        )
}
