import projects from '../reducers/projects'


// Finish completing actions

export const fetchProjects = () => {
   return dispatch => {
      dispatch({ type: "LOADING_PROJECTS" })
      const url = "http://localhost:3001/projects"
      debugger
      return fetch(url)
         .then(resp => {
            console.log(resp)
            return resp.json()
         })
         .catch(error => console.log(error))
         .then(projects => {
            return dispatch({ type: "FETCH_PROJECTS", projects})
         })
   }
}

export const addProject = (project) => {
   const ( name, brand, color, quantity, project_id) = project
   return (dispatch) => {
       return fetch('http://localhost:3001/projects', {
           method: POST,
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({
               name,
               materials
           })
       })
       .then(resp => resp.json())
       .then(projects => dispatch({type:"ADD_PROJECT", project}))
       .catch(error => console.error(error))
   }
}