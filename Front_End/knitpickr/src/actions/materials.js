export function fetchMaterials() {

    console.log("Hitting fetchMaterials")
    return (dispatch) => {
        // First action sent immediately after promise is returned
        dispatch({type: 'LOADING_MATERIALS'})
        return fetch('http://localhost/3001/materials')
            .then(r => r.json())
            .catch(error => console.log(error))
        // Second action sent after promise is resolved
            .then(materials => {
                console.log('Promise resolved -- Actually Fetching Materials')
                return dispatch(
                    type: 'FETCHING_MATERIALS',
                    payload: materials
                )
                }
            )
    }
}
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

//  export const setSearch = (searchTerm) => {
//      return{
//          type: "MATERIAL_SEARCH", search:searchTerm
//      }
