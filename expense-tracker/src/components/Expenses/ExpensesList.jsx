import ExpenseItem from "./ExpenseItem"

import './ExpensesList.css'

const ExpensesList = ({ expensesList }) => {

  if(expensesList.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses were found!</h2>
  }

  return (
    <ul className="expenses-list">
      {expensesList.map((expense) => (
        <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ))}
    </ul>
  )
}

export default ExpensesList
