export default function materialsReducer(
    // YOUR MATERIALS REDUCER

    state= {loading:false, materials:[], users:[]}, action) {
        // console.log("materials reducer:", state)
        switch (action.type) {
            
            case 'LOADING_MATERIALS':
                console.log('Reducer: Loading_Materials')
                return {...state, loading: true}
                
            case 'FETCHING_MATERIALS':
                // state = {loading: false, materials: action.payload}
                console.log('Reducer: Fetching_Materials')
                const newState = {...state, materials: action.payload}
                return newState

            case 'ADD_MATERIAL':
                // debugger
                console.log('Reducer: Add_Material')
                // Using concat because we're making a new array that is a modified version of the original anyways 
                const newMaterials = [...state.materials].concat(action.material)
                return {...state, materials: newMaterials}
                

            default:
                return state
        }
}