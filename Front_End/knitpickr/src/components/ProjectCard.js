import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'


class ProjectCard extends Component {

    handleClick = () => {

    }

    render() {
        // console.log(store)
        return(
             <div>
                 <table>
                    <Card onClick={this.handleClick}>
                        <Card.Content header='Project Card' />
                        <Card.Content description="Dummy Description" />
                        <Card.Content extra>
                            
                        </Card.Content>
                    </Card>
                </table>
             </div>
        )
    }
}

export default ProjectCard