import React from 'react';
import { Card, Image } from 'semantic-ui-react'


const ProjectCard = (props) => {
    console.log(props)
        return(
            <div onClick={props.onClick}>
                    <Card>
                        <Image src="https://www.frlib.org/site-assets/images/images/Knittingballsofyarm.jpg/" />
                        <Card.Content >
                            <Card.Header >
                                {props.project.name}
                            </Card.Header>
                        </Card.Content>

                        <Card.Content extra>
                            Published by: {props.project.user.name}
                        </Card.Content>
                        
                    </Card>
            </div>
                
        )
}

export default ProjectCard