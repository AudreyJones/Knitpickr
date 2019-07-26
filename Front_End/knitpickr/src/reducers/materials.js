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
                const newState = {...state, materials: action.payload}
                return newState

            case 'ADD_MATERIAL':
                // debugger
                return state

            default:
                return state
        }
}