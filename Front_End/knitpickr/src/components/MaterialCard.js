import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'

class MaterialCard extends Component {
    render() {
        
        return(
             <div>
                 <table>
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
}

export default MaterialCard
