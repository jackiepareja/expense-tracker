import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  // @accessor and @mutator
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDAte] = useState('');

  // @setters
  const titleChangeHandler = (evt) => {
    setEnteredTitle(evt.target.value)
  }

  const amountChangeHandler = evt => {
    setEnteredAmount(evt.target.value)

  }

  const dateChangeHandler = evt => {
    setEnteredDAte(evt.target.value)
  }

  // @submitHandler
  const submitHandler = (evt) => {
    evt.preventDefault();

    // grabbing the initial new and current state
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    // on submit, onSaveExpenseData executes that passes the function value saveExpenseDataHandler() from child to parent.
    // The function argument that we are passing is the expenseData so that it can be accessed from the child to the parent.
    props.onSaveExpenseData(expenseData);
    clearForm();
  };
  // clear form function
  const clearForm = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDAte('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-1=01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}  >Cancel</button>
        <button
          type="submit">Add Expense</button>
      </div>
    </form>


  )

}

export default ExpenseForm;