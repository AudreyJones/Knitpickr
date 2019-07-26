import React from 'react';
import MaterialCard from './MaterialCard';
import { Container, Card } from 'semantic-ui-react'; 
// import ProjectForm from './ProjectForm' Comment in to set up Create a Project Feature
import MaterialForm from './MaterialForm'

export default function ProjectShow(props) {
    console.log('ProjectShow is loaded, here are its props:')
    console.log({props})
    // debugger
    return(
        <Container>

        <h1>Project: {props.name}</h1>
        <h2>You will need: </h2>
        
        <Card.Group itemsPerRow={3}>       
        <div className="ui five stackable cards"></div>
        {props.materials.length > 0 ? props.materials.map((material, index) => <MaterialCard key={material.id} index={index} material={material} />): " No materials found!"} 
        </Card.Group>            
        </Container>

        
    )
}