import { View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-10-05'),
  },
  {
    id: 'e3',
    description: '4 bananas',
    amount: 5.99,
    date: new Date('2023-04-20'),
  },
  {
    id: 'e4',
    description: 'a book',
    amount: 49.99,
    date: new Date('2023-04-15'),
  },
  {
    id: 'e5',
    description: 'a book',
    amount: 18.59,
    date: new Date('2023-04-22'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;