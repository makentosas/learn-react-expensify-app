import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;