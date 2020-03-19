import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMaterials, addMaterial} from '../actions/materials';
import MaterialCard from '../components/MaterialCard';
import MaterialForm from '../components/MaterialForm';

// import { Link } from 'react-router-dom'
import { Container, Divider, Card, Grid, Segment } from 'semantic-ui-react';



class MaterialsContainer extends Component {
   constructor() {
      super()
      this.state = {
         animation: 'horizontal flip',
         duration: 5000, visible: true,
         isClicked: false
      }
      
  }
   
   componentDidMount() {
      this.props.fetchMaterials()
   }

     render() {
      //   console.log("Loaded MaterialsContainer props:", this.props)
      //   debugger
        return (
           <Container>
            <br />
            <Segment fluid>
               <MaterialForm />
            </Segment>
            <br />
            <br />
               <Grid columns = 'equal'>
                  <Grid.Column>
                  <Card.Group itemsPerRow={4}>  
                     <div className="ui five stackable cards">
                           {this.props.materials.map(material => 
                              <Segment>
                                 <MaterialCard key={material.id} to={`/materials/${material.id}`} material={material} />
                              </Segment>    
                           )}
                     </div>  
                  </Card.Group> 
                  </Grid.Column>
               </Grid>
           </Container>
        )
     }
}

const mapStateToProps = state => {
   // debugger;
   // console.log("mapStateToProps of MaterialsContainer: ", state)
   return {
           materials: state.materials.materials
   }
 }

export default connect(mapStateToProps, { fetchMaterials, addMaterial })(MaterialsContainer)