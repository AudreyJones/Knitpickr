import React from 'react';
import { Card, Image } from 'semantic-ui-react'


const ProjectCard = (props) => {
        // console.log("ProjectCard is:", props.project)
        // debugger
        const dummy = [ "Dummy Description"]
        return(
                    <Card>
                        <Image src="https://www.frlib.org/site-assets/images/images/Knittingballsofyarm.jpg/" />
                        <Card.Content >
                            <Card.Header >
                                {props.project.name}
                            </Card.Header>
                       
                            <Card.Description>
                                Materials: 
                            </Card.Description>
                        </Card.Content>

                        <Card.Content extra>
                            Published by: {props.project.user.name}
                        </Card.Content>
                        
                    </Card>
                
        )
}

export default ProjectCard