export function fetchProjects() {
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