import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../core-ui/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expenseItems = props.items;

  // @accessor and @mutator
  const [filteredYear, setFilteredYear] = useState('2020')
  // @mutator function
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  console.log(filteredYear)
  return (

    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filteredChangeHandler} selectedYear={filteredYear} />
      <ExpenseItem
        title={expenseItems[0].title}
        amount={expenseItems[0].amount}
        date={expenseItems[0].date} />

      <ExpenseItem
        title={expenseItems[1].title}
        amount={expenseItems[1].amount}
        date={expenseItems[1].date} />

      <ExpenseItem
        title={expenseItems[2].title}
        amount={expenseItems[2].amount}
        date={expenseItems[2].date} />

      <ExpenseItem
        title={expenseItems[3].title}
        amount={expenseItems[3].amount}
        date={expenseItems[3].date} />
    </Card>
  )
}

export default Expenses;