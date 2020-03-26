import React from 'react';
import ExpenseList from './ExpenseList';
// import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';


// const ExpenseDashboardPage = () => (
//     <div>
//         <ExpenseList />
//         <ExpenseListItem />
//     </div>
// );

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseList />
        <ExpenseListFilters />
    </div>
);

export default ExpenseDashboardPage;