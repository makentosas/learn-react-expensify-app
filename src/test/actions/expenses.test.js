import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('turi buti', () => {
    const action = removeExpense({ id: '123e'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123e'
    });
});

test('turi buti edit', () => {
    const action = editExpense('123e', { note: 'kaimas'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123e',
        updates: {
            note: 'kaimas'
        }
    });
});

test('duoti duomenys', () => {
    const expenseData = {
        description: 'Rent',
        amount: 500,
        createdAt: 1000,
        note: 'Zirgas'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('neduoti duomenys', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});
