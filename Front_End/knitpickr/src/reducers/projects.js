export default function projectsReducer(
    state= {loading:false, projects:[]}, action) {
        switch (action.type) {

            case 'LOADING_PROJECTS'
                console.log('Loading Projects')
                return {...state, loading: true}
                
            case 'FETCHING_PROJECTS':
                state = {loading: false, projects: action.payload}
                console.log('Fetching Proejcts')
                console.log(state)
                return state

            default:
                return state
        }
}