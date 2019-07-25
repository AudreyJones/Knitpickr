import React from 'react';
import MaterialCard from './MaterialCard';
// import MaterialForm from './MaterialForm'
// import ProjectForm from './ProjectForm' Comment in to set up Create a Project Feature

export default function MaterialShow(props) {
    console.log('ProjectShow is loaded, here are its props:')
    console.log({props})
    debugger
    return(
        <div>
        <h1>Materials Master List</h1>
        <h2>Favorited? {props.favorited ? true : null}</h2>
        <h2>You will need: </h2>
        <h3>{props.materials.length > 0 ? props.materials.map((material, index) => <MaterialCard key={material.id} index={index} material={material} />): " No materials found!"}</h3>                
        {/* < MaterialForm addMaterial={props.addMaterial} projectID={props.id} /> */}
        </div>

        
    )
}