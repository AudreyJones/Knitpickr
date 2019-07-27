import React from 'react';
import MaterialCard from './MaterialCard';
import { Container, Card } from 'semantic-ui-react';


export default function MaterialShow(props) {
    console.log('ProjectShow is loaded, here are its props:', props)
    
    debugger
    return(
        <Container>
        <h1>Material: THING</h1>
        
        {/* <h3>{props.materials.length > 0 ? props.materials.map((material, index) => <MaterialCard key={material.id} index={index} material={material} />): " No materials found!"}</h3>                 */}
        
        </Container>

        
    )
}