import { useState } from 'react';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../core-ui/Card";
import "./Expenses.css";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  // @accessor and @mutator
  const currYear = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(currYear);

  // @mutator function
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  // @method to filter year
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })



  return (

    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filteredChangeHandler} selectedYear={filteredYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses;