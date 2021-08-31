import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const saveExpenseDataHandler = ( enteredExpenseData ) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
   
    onAddExpense(expenseData)
  }

  const showForm = () => {
    setIsFormOpen(!isFormOpen)
  }

  return (
    <div className="new-expense">
      {!isFormOpen ? (
        <button type="button" onClick={showForm}>Add new expense</button>
      ) : (
        <ExpenseForm showForm={showForm} onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  )
}

export default NewExpense
