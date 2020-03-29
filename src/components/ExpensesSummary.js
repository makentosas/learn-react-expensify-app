import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/Expenses-total';

const ExpensesSummary = ({ expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div>
            <h2>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} </h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    };
};

export default connect (mapStateToProps)(ExpensesSummary);