import { combineReducers } from 'redux';

import authReducer from './authReducer';

// ==============================|| COMBINE REDUCER ||============================== //

export default combineReducers({
    authReducer: authReducer,
});