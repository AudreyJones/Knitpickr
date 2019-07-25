export function fetchProjects() {
//  YOUR PROJECTS ACTION CREATOR
   console.log("Hitting fetchProjects")
   return (dispatch) => {
       // First action sent immediately after promise is returned
       dispatch({type: 'LOADING_PROJECTS'})
       return fetch('http://localhost/3001/projects')
           .then(r => r.json())
           .catch(error => console.log(error))
       // Second action sent after promise is resolved
           .then(projects => {
               console.log('Promise resolved -- Actually Fetching Projects')
               return dispatch({
                   type: 'FETCHING_PROJECTS',
                   payload: projects
                })
               }
           )
    }
}
 
// To be continued....for POST request showing data persistence!
// {
// export const addProject = (project) => {
//    const ( name, brand, color, quantity, project_id) = project
//    return (dispatch) => {
//        return fetch('http://localhost:3001/projects', {
//            method: POST,
//            headers: {
//                'Content-Type': 'application/json',
//                Accept: 'application/json'
//            },
//            body: JSON.stringify({
//                name,
//                materials
//            })
//        })
//        .then(resp => resp.json())
//        .then(projects => dispatch({type:"ADD_PROJECT", project}))
//        .catch(error => console.error(error))
//    }
// }