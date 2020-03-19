import React from 'react';
import MaterialCard from './MaterialCard';
import { Container, Card, Grid } from 'semantic-ui-react'; 


export default function ProjectShow(props) {
    console.log('ProjectShow is loaded, here are its props:', props.location.state.project)
    console.log("ProjectShow props: ", props)
    
    const project = props.location.state.project

    return(
        <Container>
           
            <h1>Project: {project.name}</h1>
            <h2>You will need: </h2>
            <Grid>
            <Card.Group itemsPerRow={3}>       
                <div className="ui five stackable cards"></div>
                {project.materials.length > 0 ? project.materials.map((material, index) => <MaterialCard key={material.id} index={index} material={material} />): " No materials found!"} 
            </Card.Group>  
            </Grid>          
        </Container>   
    )
}