import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_EXPENSES = [
  {
    id: "e1",
    title: "Car Wash",
    amount: 22.63,
    date: new Date(2022, 5, 12)
  },
  {
    id: "e2",
    title: "Amex Gold Card Fee",
    amount: "250",
    date: new Date(2021, 5, 10)
  }
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [{ ...expense, id: Math.random().toString() }, ...prevExpenses];
    });
  }
  

  // Make h2 tag center
  const h2Styles = {
    textAlign: "center",
    color: "white"
  };

  return (
    <div>
      <h2 style={h2Styles}>Expenese Tracker Using React.JS</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
