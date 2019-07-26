import React from 'react';
import MaterialCard from './MaterialCard';
import { Container, Card } from 'semantic-ui-react';
// import MaterialForm from './MaterialForm'
// import ProjectForm from './ProjectForm' Comment in to set up Create a Project Feature

export default function MaterialShow(props) {
    console.log('ProjectShow is loaded, here are its props:')
    console.log({props})
    debugger
    return(
        <Container>
        <h1>Material: THING</h1>
        
        {/* <h3>{props.materials.length > 0 ? props.materials.map((material, index) => <MaterialCard key={material.id} index={index} material={material} />): " No materials found!"}</h3>                 */}
        
        </Container>

        
    )
}