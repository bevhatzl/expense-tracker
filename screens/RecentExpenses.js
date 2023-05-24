import { useContext, useEffect } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      // Add this function because you should not turn a useEffect into an async function
      const expenses = await fetchExpenses();
      expensesContext.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const data7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= data7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
}

export default RecentExpenses;
