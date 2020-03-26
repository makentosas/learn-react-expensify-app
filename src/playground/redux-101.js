import { createStore } from 'redux'; //folder 10(redux)

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'   
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};
const store = createStore(countReducer);

//subcribe print value, same as console.log
//unsubcribe stop calling all action after it is called.
const unsubcribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({ incrementBy: 34}));
store.dispatch(incrementCount());

// unsubcribe();
//stops all actions fro here

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 14 }));


store.dispatch(resetCount());


store.dispatch(setCount({ count: 436 }));
