import { createStore, combineReducers } from 'redux';
import expenceReducer from '../reducer/expenses';
import filterReducer from '../reducer/filters';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenceReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );

    return store;
}


