import React from 'react';
import MaterialCard from './MaterialCard';
import { Container, Card } from 'semantic-ui-react'; 


export default function ProjectShow(props) {
    console.log('ProjectShow is loaded, here are its props:', props)
    
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