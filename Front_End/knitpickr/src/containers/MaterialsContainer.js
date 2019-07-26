import React, { Component } from 'react';
import { Grid, Container, Divider, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {fetchMaterials, addMaterial} from '../actions/materials';
import MaterialCard from '../components/MaterialCard';
import MaterialForm from '../components/MaterialForm';
import MaterialSHow from '../components/MaterialShow';

class MaterialsContainer extends Component {

   componentDidMount() {
      // debugger
      this.props.fetchMaterials()
   }

   handleClick = (e) => { // Upon click, needs to display the specific material's show page component
      console.log("This Material Card has been clicked!")
      // this.props.MaterialShow()
   }

     render() {
        console.log("Loaded MaterialsContainer", this)
      //   debugger
        return (
           <Container>
            
               <MaterialForm />
            
            <br />
            <br />
            <Card.Group itemsPerRow={4}>  
            <div className="ui five stackable cards"></div>
               <MaterialCard />
               {/* {this.props.materials.map(material => <MaterialCard key={material.id} to={`/materials/${material.id}`} material={material} onClick={this.handleClick}/>)} */}
            </Card.Group> 
           </Container>
            
        )
     }

}

const mapStateToProps = state => {
   console.log("state: ", state)
   return {
      // Naming the prop held by the ProjectsContainer and what we're filling it with.
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