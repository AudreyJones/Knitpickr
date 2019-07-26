export function fetchMaterials() {
//  Your MATERIALS ACTION CREATOR
    console.log("Hitting fetchMaterials")
    return (dispatch) => {
        // First action sent immediately after promise is returned
        dispatch({type: 'LOADING_MATERIALS'})
        return fetch('http://localhost:3001/materials')
            .then(r => r.json())
            .catch(error => console.log(error))
        // Second action sent after promise is resolved
            .then(materials => dispatch({ type: 'FETCHING_MATERIALS', payload: materials})
                // console.log('Promise resolved -- Actually Fetching Materials')
            )
            
    }
}


 export const addMaterial = (material) => {
    //  debugger
    //  Destructuring: const ({name, brand, color, quantity, project_id} = {material})
    return (dispatch) => {
        return fetch('http://localhost:3001/materials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({material})
        })
        .then(resp => resp.json())
        .then(material => dispatch({type:"ADD_MATERIAL", material}))
        .catch(error => console.error(error))
    }
 }

 // Old POST request for data persistence
    // addMaterial = (name, brand, color, quantity, project_id) => {
    //   console.log("sent added material to Rails API")
    //   const data = {name, brand, color, quantity, project_id}
    //   fetch("http://localhost:3001/materials", {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type' : 'application-json',
    //     },
    //     body: JSON.stringify(data)
    //   })
    //   .then(resp => resp.json())
    //   .then(console.log())
    // }
    

//  export const setSearch = (searchTerm) => {
//      return{
//          type: "MATERIAL_SEARCH", search:searchTerm
//      }
