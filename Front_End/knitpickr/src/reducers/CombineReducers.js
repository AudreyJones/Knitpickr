import {combineReducers} from 'redux';
import materials from './materials'
import projects from './projects'
// Need to import other reducers and combine them here


const reducerAction = (state = {name: 'this project'}, action) => {
    
}

export default const CombineReducers = combineReducers({materials, projects})
