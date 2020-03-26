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

//sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});


//sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});


//set start date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});


//set end date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
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
        case 'SET_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

//get visible expenses (create variable to filter expences)
//2arguments = 1->filter all expenses, 2->filters
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => { 
    return expenses.filter((expense) => {
        const starDateMatch = typeof startDate !== 'number' || expense.startDate >= 1000; 
        const endDateMatch = typeof endDate !== 'number' || expense.endDate <= 1000; 
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return starDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt? 1 : -1; //newest date first
        } else if(sortBy === 'amount') {
            return a.amount < b.amount? 1 : -1; //highest amount first
        }
    });
};


//store creation
const store = createStore(
    combineReducers({
        expenses: expenceReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const first = store.dispatch(addExpense({ description: 'Rent', amount: 530, createdAt: 100})); // start date 1970 jan 1; +1000 = +1second after starting date
const second = store.dispatch(addExpense({ description: 'Gem', amount: 4340, createdAt: -200})); // older than start date

// console.log('liko:');

// store.dispatch(removeExpense({ id: first.expenses.id }));
// store.dispatch(editExpense(second.expenses.id, { description: 'Kurwa' }));

// console.log('po ziemos');

// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter('amount'));

// console.log('vakareja');

// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));


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


