import { useState } from "react";
import Card from "../Ui/Card";

import './Expenses.css'
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const handleFilteredYear = ( year ) => {
    setFilteredYear( year )
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onChangeFilteredYear={handleFilteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expensesList={filteredExpenses} />      
    </Card>
  )
}

export default Expenses
