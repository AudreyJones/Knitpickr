import React from 'react';
import MaterialCard from './MaterialCard';
import { Container, Card, Grid, Segment } from 'semantic-ui-react'; 


export default function ProjectShow(props) {
    console.log("Passed-Down Props: ", props)
    const project = props.location.state.project
    console.log('Current Project', project)
    console.log("This:", this)
    
    

    return(
        <Container>
           
            <h1>Project: {project.name}</h1>
            <h2>You will need: </h2>

            <Segment>
                  {project.project_materials.map(project =>  {project.materials.length > 0 ? 
                        project.materials.map((material, index) => 
                            <Grid container columns={3} stackable>
                                <Grid.Column>
                                    <MaterialCard key={material.id} index={index} material={material} />
                                </Grid.Column>  
                            </Grid>}
                            ):  "No materials found!"}
                            )}
            </Segment>


        </Container>   
    )
}

{/* <Grid>
            <Card.Group itemsPerRow={3}>       
                <div className="ui five stackable cards"></div>
                {project.materials.length > 0 ? project.materials.map((material, index) => <MaterialCard key={material.id} index={index} material={material} />): " No materials found!"} 
            </Card.Group>  
            </Grid>           */}