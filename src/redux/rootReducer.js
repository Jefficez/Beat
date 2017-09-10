import { combineReducers } from 'redux';
import { rdLogin } from '../scenes/Splash/reduces';
import Navigation from '../navigation/rdNavigation';

const rootReducer = combineReducers({
    rdLogin,
    nav: Navigation
});

export default rootReducer;
