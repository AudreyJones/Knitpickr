import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import {fetchProjects} from '../actions/fetchProjects';
// import Projects from '../components/Projects';

export default class MaterialsContainer extends Component {

    
  
     render() {
        console.log("Loaded Materials Container")
        console.log(this.state)
        
        return (
           <ul>
           {this.props.materials.map(material => <li key={material.id}> <Link to={`/materials/${material.id}`}> {material.name} </Link> </li>)}
           </ul>
            
        )
     }




}