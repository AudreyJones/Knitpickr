import React from 'react';
import { Card } from 'semantic-ui-react'


 const ProjectCard = (props) => {

        console.log("ProjectCard is:", props.project)
        
        // debugger
        return(
             <div>
                 <table>
                    <Card>
                        <Card.Content header="Header" />
                        <Card.Content description={props} />
                        <Card.Content extra>
                            
                        </Card.Content>
                    </Card>
                </table>
             </div>
        )
    
}

export default ProjectCard