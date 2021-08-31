import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData, showForm }) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Forma para guardar todos estados em um único state
/*   const [userInput, setUserInput] =  useState({
    enteredTitle: '',
    enteredAMount: '',
    setEnteredDate: '',
  }) */

  const titleChangeHandler = ( event ) => {
    setEnteredTitle( event.target.value )

    /** Atualizando um único dado do estado anterior */
    /**
     * setUserInput((prevState) => {
     *  return {
     *    ...prevState,
     *    enteredTitle: event.target.value
     *  }
     * })
     */
  }

  const amountChangeHandler = ( event ) => {
    setEnteredAmount( event.target.value );
  }

  const dateChangeHandler = ( event ) => {
    setEnteredDate( event.target.value )
  }

  const submitHandler = ( event ) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    onSaveExpenseData( expenseData );

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')

    showForm()
  }

  return (
    <>
    {showForm && (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="expense-title">Title</label>
            <input
              type="text"
              name="expense-title"
              id="expense-title"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="expense-amount">Amount</label>
            <input
              type="number"
              name="expense-amount"
              id="expense-amount"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="expense-date">Date</label>
            <input
              type="date"
              name="expense-date"
              id="expense-date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={showForm}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    )}
    </>
  )
}

export default ExpenseForm
