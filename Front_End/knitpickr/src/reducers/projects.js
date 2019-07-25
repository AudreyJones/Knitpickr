export default function projectsReducer(
    // YOUR PROJECTS REDUCER

    state= {loading:false, projects:[]}, action) {
        switch (action.type) {

            case 'LOADING_PROJECTS':
                console.log('Loading Projects')
                return {...state, loading: true}
                
            case 'FETCHING_PROJECTS':
                // debugger
                state = {loading: false, projects: action.payload}
                console.log('Fetching Projects')
                console.log(state.projects)
                return state

            default:
                return state
        }
}