import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Divider, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {fetchMaterials, addMaterial} from '../actions/materials';
import MaterialCard from '../components/MaterialCard';
import MaterialForm from '../components/MaterialForm';

class MaterialsContainer extends Component {

   componentDidMount() {
      this.props.fetchMaterials()
   }

     render() {
        console.log("Loaded MaterialsContainer")
        return (
           <Container>
            <Divider/>
               <MaterialForm />
            <Divider/>
            <br />
            <br />
            <Card.Group itemsPerRow={4}>  
            <div className="ui five stackable cards"></div>
               {this.props.materials.map(material => <Link to={`/materials/${material.id}`}><MaterialCard key={material.id} to={`/materials/${material.id}`} material={material} /></Link>)}
            </Card.Group> 
           </Container>
        )
     }
}

const mapStateToProps = state => {
   console.log("mapStateToProps of MaterialsContainer: ", state)
   return {
      // Reducer updates state with fetched materials and we package those materials in a 
      // prop held by the ProjectsContainer - materials: filled with project.materials.materials
           materials: state.materials.materials
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