import MaterialCard from "../components/MaterialCard";

export default function materialsReducer(
    // YOUR MATERIALS REDUCER

    state= {loading:false, materials:[], users:[]}, action) {
        switch (action.type) {

            case 'LOADING_MATERIALS':
                console.log('Loading Materials')
                return {...state, loading: true}
                
            case 'FETCHING_MATERIALS':
                state = {loading: false, materials: action.payload}
                console.log('Fetching Materials', state.materials)
                const all_users = state.materials.map(material => {
                    // debugger
                    return (material.user)
                })

                // debugger
                console.log('Fetched User Info:', all_users)
                
                return state

            default:
                return state
        }
}