import React from 'react';
// import MaterialCard from './ProjectCard';

export default function ProjectShow(props) {
    return(
        <div>
            Project Show Page - needs more info filled in!
        <h1>{props.name}</h1>
        <h2>Materials: {props.materials ? "" : "This project doesn't have a materials list at the moment!"}</h2>
        {/* {props.materials.map((material) => {<MaterialCard material={material} />})} */}
            
        </div>
    )
}