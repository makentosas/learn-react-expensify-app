const expensesTotal = (expenses) => {
        //return array   | name single | extract amount | use reduce    |    sum of values start at 0    
        return expenses.map((expense) => expense.amount).reduce((sum, value) => sum + value, 0);
}; 

export default expensesTotal;