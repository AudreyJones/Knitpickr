// // import materials from '../reducers/materials'


// export const fetchMaterials = () => {
//     return (dispatch) => {
//        dispatch({ type: "LOADING_MATERIALS" })
//        return fetch("http://localhost:3001/projects")
//           .then(resp => resp.json())
//           .then(materials => dispatch ({ type: "FETCH_MATERIALS", materials} ))
//           .catch(error => console.log(error))
//     }
//  }

//  export const addMaterial = (material) => {
//     //  Destructuring
//     const ({name, brand, color, quantity, project_id} = {material})
//     return (dispatch) => {
//         return fetch('http://localhost:3001/materials', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json'
//             },
//             body: JSON.stringify({
//                 name,
//                 brand,
//                 color,
//                 quantity
//             })
//         })
//         .then(resp => resp.json())
//         .then(material => dispatch({type:"ADD_MATERIAL", material}))
//         .catch(error => console.error(error))
//     }
//  }

// //  export const setSearch = (searchTerm) => {
// //      return{
// //          type: "MATERIAL_SEARCH", search:searchTerm
// //      }
// //  }