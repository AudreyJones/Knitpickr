import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'


class ProjectCard extends Component {
    render() {
        
        return(
             <div>
                 All Project Cards:
                    <Card>
                        <Card.Content header='Project Card' />
                        <Card.Content description="Description" />
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
             </div>
        )
    }
}

export default ProjectCard