export default function materialsReducer(
    state= {loading:false, materials:[]}, action) {
        switch (action.type) {

            case 'LOADING_MATERIALS'
                console.log('Loading Materials')
                return {...state, loading: true}
                
            case 'FETCHING_MATERIALS':
                state = {loading: false, materials: action.payload}
                console.log('Fetching Materials')
                console.log(state)
                return state

            default:
                return state
        }
}