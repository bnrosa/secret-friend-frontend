import { createStore, applyMiddleware, combineReducers } from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr'
import rootReducer from "./reducers/index";
import thunk from 'redux-thunk';

const reducers = {root: rootReducer, toastr: toastrReducer};
const reducer = combineReducers(reducers);
const store = createStore(rootReducer,
    applyMiddleware(thunk));

export default store;