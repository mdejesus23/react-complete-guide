import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const LIST_EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(LIST_EXPENSES);

  useEffect(() => {
    localStorage.setItem("expenseData", JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
