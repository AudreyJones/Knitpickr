import React, { Component } from 'react';
import { Grid, Container, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {fetchMaterials, addMaterial} from '../actions/materials';
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
            <Container textAlign='left'>
               <MaterialForm />
            </Container>
            <br />
            <Container>
            <Grid columns={3} divided>
               <MaterialCard />
               {/* {this.props.materials.map(material => <MaterialCard key={material.id} to={`/materials/${material.id}`} material={material} onClick={this.handleClick}/>)} */}
            </Grid>
            </Container>
               
         
           
           </div>
            
        )
     }

}

const mapStateToProps = state => {
   console.log('state', state)
   return {
      materials: state.materials
   
   }
 }
 
//  const mapDispatchToProps = (dispatch) => {
//     console.log("hitting mapDispatchToProps")
//     console.log(dispatch)
//    return({
//       fetchMaterials: (event) => {dispatch(
//         fetchMaterials(event)
//       )}
//   })
//  }


 

export default connect(mapStateToProps, { fetchMaterials, addMaterial })(MaterialsContainer)
// export default connect(mapStateToProps, { fetchProjects, addProjects })(ProjectsContainer)