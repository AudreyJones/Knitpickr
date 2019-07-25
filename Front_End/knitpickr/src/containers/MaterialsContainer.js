import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMaterials} from '../actions/materials';
import MaterialCard from '../components/MaterialCard';

class MaterialsContainer extends Component {


   componentDidMount() {
      debugger
      this.props.fetchMaterials()
   }

     render() {
        console.log("Loaded Materials Container")
        
      //   debugger
        return (
           <div>
         MaterialsContainer, filled with MaterialCards
           <table >
          {/* for each material, render a material card */}
          {/* {this.props.materials.map(material => <li key={material.id}> <Link to={`/materials/${material.id}`}> {material.name} </Link> </li>)} */}
           </table>
           </div>
            
        )
     }

}

const mapStateToProps = state => {
   console.log('hitting mapStateToProps')
   console.log(state)
   return {
      materials: state.materials
      // projects: state.projects
   }
 }
 
 const mapDispatchToProps = (dispatch) => {
    console.log("hitting mapDispatchToProps")
    console.log(dispatch)
   return({
      fetchMaterials: (event) => {dispatch(
        fetchMaterials(event)
      )}
  })
 }


 

export default connect(mapStateToProps, mapDispatchToProps)(MaterialsContainer)