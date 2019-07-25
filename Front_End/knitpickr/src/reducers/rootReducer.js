import {combineReducers} from 'redux';
// Need to import other reducers and combine them here
import materials from './materials'
import projects from './projects'


export default combineReducers({materials, projects})