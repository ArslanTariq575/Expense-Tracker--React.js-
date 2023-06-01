import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020');

  function filterChangeHandler(selectedYear) {
    setFilterYear(selectedYear);
  }

  // Filter expenses by year
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  let expenseContent =  <p> No Expenese Found</p>

  if (filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem 
      key={expense.id} 
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} />
    ))
  }
  return (
    <div className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
       {expenseContent}
    </div>
  );
}


export default Expenses;
