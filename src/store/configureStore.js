import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import expenceReducer from '../reducer/expenses';
import filterReducer from '../reducer/filters';
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenceReducer,
            filters: filterReducer
        }),
        composeEnchancers(applyMiddleware(thunk))
    );

    return store;
}


