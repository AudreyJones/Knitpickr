export function fetchProjects() {
//  YOUR PROJECTS ACTION CREATOR
   console.log("Hitting fetchProjects ACTION CREATOR")
//    debugger
   return (dispatch) => {
       // First action sent immediately after promise is returned
       dispatch({type: 'LOADING_PROJECTS'})
       return fetch('http://localhost:3001/projects')
           .then(r => r.json())
           .catch(error => console.log(error))
        // Second action sent after promise is resolved
        //   console.log('Promise resolved -- Actually Fetching Projects', projects)
           .then(projects => dispatch({ type: 'FETCHING_PROJECTS', payload: projects }))
    }
}

export const addProject = (project) => {
    // debugger
    // console.log("project: ", project)
    // var (name, materials) = project
   return (dispatch) => {
       return fetch('http://localhost:3001/projects', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({
               project: project})
       })
       .then(resp => resp.json())
       .then(newProject => dispatch({type:"ADD_PROJECT", newProject}))
       .catch(error => console.error(error))
   }
}