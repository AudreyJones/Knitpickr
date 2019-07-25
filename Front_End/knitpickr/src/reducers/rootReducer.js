import {combineReducers} from 'redux';

// Materials Reducer
    import materials from './materials'
// Projects Reducer
    import projects from './projects'

const rootReducer = combineReducers({materials: materials, projects: projects})


export default rootReducer