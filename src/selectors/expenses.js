import moment from 'moment';

//get visible expenses (create variable to filter expences)
//2arguments = 1->filter all expenses, 2->filters
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => { 
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const starDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment, "day") : true; 
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day') : true; 
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


export default getVisibleExpenses;