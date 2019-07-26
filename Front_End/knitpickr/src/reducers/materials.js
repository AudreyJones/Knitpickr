import MaterialCard from "../components/MaterialCard";

export default function materialsReducer(
    // YOUR MATERIALS REDUCER

    state= {loading:false, materials:[], users:[]}, action) {
        console.log("materials reducer:", state)
        switch (action.type) {
            
            case 'LOADING_MATERIALS':
                console.log('Loading Materials')
                return {...state, loading: true}
                
            case 'FETCHING_MATERIALS':
                // state = {loading: false, materials: action.payload}
                console.log('Fetching Materials', state.materials)
                
                // Trying to store user names and id numbers to make accessible in Forms ******* ** *
                // const all_users = {
                // if (state.users) {
                //     const Thing = state.materials.map(material => {
                //     // debugger
                //         return (material.user)
                //     })
                //     return(state.users: Thing)
                // }  
                // state.users = all_users
                // debugger
                // }
                // debugger
                // console.log('Fetched User Info:', all_users)
                
                return state
            case 'ADD_MATERIAL':
                debugger
                return state

            default:
                return state
        }
}