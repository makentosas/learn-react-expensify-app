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


export default expenceReducer;
