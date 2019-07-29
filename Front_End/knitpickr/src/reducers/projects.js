export default function projectsReducer(
    // YOUR PROJECTS REDUCER

    state= {loading:false, projects:[]}, action) {
        switch (action.type) {

            case 'LOADING_PROJECTS':
                console.log('REDUCER: Loading_Projects')
                return {...state, loading: true}
                
            case 'FETCHING_PROJECTS':
                // debugger
                console.log('REDUCER: Fetching_Projects')
                const newState = {...state, projects: action.payload}
                return newState
                
            case 'ADD_PROJECT':   
            debugger
                console.log('REDUCER: Add_Project')     
                const newProject = [...state.projects]
                newProject.push(action.newProject)
                return {...state, projects: newProject }

            default:
                return state
        }
}