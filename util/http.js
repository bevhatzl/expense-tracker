import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://expense-tracker-9f094-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}
