import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMaterials} from '../actions/materials';
import MaterialCard from '../components/MaterialCard';
import MaterialForm from '../components/MaterialForm'

class MaterialsContainer extends Component {


   componentDidMount() {
      // debugger
      this.props.fetchMaterials()
   }

   handleClick = (e) => {
      e.preventDefault()
      console.log("This Material Card has been clicked!")
   }

     render() {
        console.log("Loaded MaterialsContainer")
        
      //   debugger
        return (
           <div>
            <MaterialForm />
         
            <MaterialCard />
          {/* for each material, render a material card */}
          {this.props.materials.map(material => <MaterialCard key={material.id} to={`/materials/${material.id}`} material={material} onClick={this.handleClick}/>)}
           
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


 

export default connect((mapStateToProps, mapDispatchToProps), { fetchMaterials })(MaterialsContainer)