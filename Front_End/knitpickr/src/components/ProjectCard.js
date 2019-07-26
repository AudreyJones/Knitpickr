import React from 'react';
import { Card } from 'semantic-ui-react'


 const ProjectCard = (props) => {

        console.log("ProjectCard is:", props.project.name)
        
        // debugger
        return(
             <div>
                 <table>
                    <Card>
                        <Card.Content header={props.project.name} />
                        <Card.Content description={props} />
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </table>
             </div>
        )
    
}

export default ProjectCard