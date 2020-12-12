import {combineReducers} from 'redux';
import alertReducers from './alertReducers';
import authReducers from './authReducers';
import userReducers from './userReducers';
import portfolioReducers from './portfolioReducers';

export default combineReducers({
    alertReducers,
    authReducers,
    userReducers,
    portfolioReducers
});
