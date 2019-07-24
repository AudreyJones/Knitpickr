import React from 'react';
import MaterialCard from './MaterialCard';

export default function ProjectShow(props) {
    console.log('ProjectShow is loaded')
    console.log({props})
    // debugger
    return(
        <div>
        <h1>Project: {props.name}</h1>
        <h2>Favorited? {props.favorited ? true : null}</h2>
        <h2>You will need: 
            {props.materials.length > 0 ? props.materials.map((material) => <MaterialCard key={material.id} material={material} />): " No materials available for this project"}

        </h2>
        
      
            
        </div>
    )
}