import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../core-ui/Card";
import "./Expenses.css";

const Expenses = (props) => {

  // @accessor and @mutator
  const [filteredYear, setFilteredYear] = useState('2020')
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
      {
        filteredExpenses.map(item => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      }
    </Card>
  )
}

export default Expenses;