import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunkMiddleware  from "redux-thunk"
import { formReducer } from './formReducer';



let reducers = combineReducers({
mainForm: formReducer /// Это наш редусер

});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));


export default store;