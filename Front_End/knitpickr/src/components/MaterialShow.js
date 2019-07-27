import React from 'react';
import { Container, Divider } from 'semantic-ui-react';


export default function MaterialShow(props) {
    console.log('ProjectShow is loaded, here are its props:', props)
    
    const material = props.location.state.material
    const materialColor = material.color.charAt(0).toUpperCase() + material.color.slice(1)
    const materialName = material.name.charAt(0).toUpperCase() + material.name.slice(1)
    
    return(
        <Container>
            <Divider/>
        <h1>{material.brand}</h1>
        <h2>{materialColor} {materialName}</h2>
        <h3>Quantity: {material.quantity}</h3>
        
        {/* <h3>{props.materials.length > 0 ? props.materials.map((material, index) => <MaterialCard key={material.id} index={index} material={material} />): " No materials found!"}</h3>                 */}
        </Container> 
    )
}