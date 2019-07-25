export default function projectsReducer(
    // YOUR PROJECTS REDUCER

    state= {loading:false, projects:[]}, action) {
        switch (action.type) {

            case 'LOADING_PROJECTS':
                console.log('Loading Projects REDUCER')
                return {...state, loading: true}
                
            case 'FETCHING_PROJECTS':
                // debugger
                // state = {loading: false, projects: action.payload}
                // console.log("Fetching Projects Action:", state)
                const newState = {...state, projects: action.payload}
                debugger
                return newState
                
            // case 'ADDING_PROJECTS':
            //     return {...state, *new project tacked on*}

            default:
                return state
        }
}