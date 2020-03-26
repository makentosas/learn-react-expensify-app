import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//add expence
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expenses: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    });


//remove expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
});


//edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


//set text filter 
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//expence reducer
const expencesReduserDefaultState = [];

const expenceReducer = (state = expencesReduserDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ];
        case 'REMOVE_EXPENSE':
            //keeps object if id is not matching with and removes if matching, retun new array.
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expenses) => {
                if (expenses.id === action.id) {
                    return {
                        ...expenses, //extracting all expense objects 
                        ...action.updates //update all who matching id
                    };
                } else {
                    return expenses;
                };
            });
        default:
            return state;
    }
};


//filter reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};


//store creation
const store = createStore(
    combineReducers({
        expenses: expenceReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const first = store.dispatch(addExpense({ description: 'Rent', amount: 530 }));
const second = store.dispatch(addExpense({ description: 'Pay', amount: 440 }));

console.log('liko:');

store.dispatch(removeExpense({ id: first.expenses.id }));
store.dispatch(editExpense(second.expenses.id, { description: 'Kurwa' }));

console.log('po ziemos');

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());


const demoState = {
    expenses: [{
        id: 'euruey',
        description: 'Januare Rent',
        note: 'This was teh final payment for that address',
        amount: 54000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
