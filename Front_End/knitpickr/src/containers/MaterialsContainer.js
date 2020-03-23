import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMaterials, addMaterial} from '../actions/materials';
import MaterialCard from '../components/MaterialCard';
import MaterialForm from '../components/MaterialForm';

// import { Link } from 'react-router-dom'
import { Container, Card, Grid, Segment, Header } from 'semantic-ui-react';



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
         <div>
           <Segment>
               <MaterialForm />
               <br />
               <Grid container columns={3} stackable>
                  {this.props.materials.map(material => 
                     <Grid.Column>
                        <MaterialCard key={material.id} to={`/materials/${material.id}`} material={material} />
                     </Grid.Column>   
               )}
               </Grid>
            </Segment>
           </div>
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