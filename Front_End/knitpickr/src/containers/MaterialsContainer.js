import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMaterials, addMaterial} from '../actions/materials';
import MaterialCard from '../components/MaterialCard';
import MaterialForm from '../components/MaterialForm';

// import { Link } from 'react-router-dom'
import { Container, Divider, Card, Transition } from 'semantic-ui-react';



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

   handleChange = (e, { name, value }) => this.setState({ [name]: value })

   handleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

   render() { //   console.log("Loaded MaterialsContainer props:", this.props)
      const { animation, duration, visible } = this.state
      return (
           <Container>
            <Divider/>
               <MaterialForm />
            <Divider/>
               <Card.Group itemsPerRow={4}>  
                  <div className="ui five stackable cards">
                     <Transition.Group animation={this.state.animation} duration={this.state.duration} >
                        {visible && this.props.materials.map(material => 
                              <MaterialCard key={material.id} to={`/materials/${material.id}`} material={material} />    
                        )}
                     </Transition.Group>
                  </div>  
               </Card.Group> 
           </Container>
        )
     }
}

const mapStateToProps = state => {
   // console.log("mapStateToProps of MaterialsContainer: ", state)
   return {
           materials: state.materials.materials
   }
 }

export default connect(mapStateToProps, { fetchMaterials, addMaterial })(MaterialsContainer)