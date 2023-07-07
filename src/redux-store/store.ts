import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export { store };