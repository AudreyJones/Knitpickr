import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMaterials} from '../actions/materials';
import MaterialCard from '../components/MaterialCard';

class MaterialsContainer extends Component {

     render() {
        console.log("Loaded Materials Container")
        console.log(this) //null --> first run, after debugger --> full
        debugger
        return (
           <div>
         Material Container, filled with MaterialCards
           <table >
          {/* for each material, render a material card */}
          {/* {this.props.materials.map(material => <li key={material.id}> <Link to={`/materials/${material.id}`}> {material.name} </Link> </li>)} */}
           </table>
           </div>
            
        )
     }

}

const mapStateToProps = state => {
   console.log(state)
   return {
      materials: state.materials,
      projects: state.projects
   }
 }
 
 const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
   return({
      fetchMaterials: (event) => {dispatch(
        fetchMaterials(event)
      )}
  })
 }


 

export default connect(mapStateToProps, mapDispatchToProps)(MaterialsContainer)