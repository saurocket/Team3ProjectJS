import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunkMiddleware  from "redux-thunk"
import { formReducer } from './formReducer';
import { eventsReducer } from './eventsReducer';



let reducers = combineReducers({
mainForm: formReducer, /// Это наш редусер
events: eventsReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));


export default store;