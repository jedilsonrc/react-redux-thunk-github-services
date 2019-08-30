import {createStore, applyMiddleware} from 'redux';
import gitLabReducer from '../reducers/index'
import thunk from 'redux-thunk'


const store = createStore(gitLabReducer,applyMiddleware(thunk));

export default store;