export function getMyProjects = () => dispatch => {
    dispatch({type: 'GET_MY_PROJECTS' })
    const url = "http://localhost:3000/"
    return fetch(url)
         .then(resp => {
            console.log(resp)
            return resp.json()
         })
         .then(weather => {
            return dispatch({ type: "FETCH_WEATHER", weather})
         })
   }