import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMaterials} from '../actions/materials';
import MaterialCard from '../components/MaterialCard';

export default class MaterialsContainer extends Component {

    
  
     render() {
        console.log("Loaded Materials Container")
        console.log(this.state.materials) //null --> first run, after debugger -->
        debugger
        return (
           <ul>
           <table >
              Material Cards arranged here!
           {/* {this.props.materials.map(material => <li key={material.id}> <Link to={`/materials/${material.id}`}> {material.name} </Link> </li>)} */}
           </table>
           </ul>
            
        )
     }

}

const mapStateToProps = state => {
   return {materials: state.materials,
           projects: state.projects
   }
 }
 
 const mapDispatchToProps = dispatch => {
   getActionNowAsProps: () => dispatch(fetchMaterials)
 }

export default connect(mapStateToProps, { fetchMaterials })(MaterialsContainer)