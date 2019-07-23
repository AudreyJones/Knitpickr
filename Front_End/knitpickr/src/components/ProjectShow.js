import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectShow(props) {
    return(
        <div>
            Project Show Page
        <h2>{props.name}</h2>
            <ProjectCard/>
        </div>
    )
}