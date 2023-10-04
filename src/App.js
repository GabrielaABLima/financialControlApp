import React from "react";
import ExpenseContainer from "./components/Expenses/ExpenseContainer";

const App = () => {
  const expenses = [
    {
      id: 0,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 7, 11),
    }, // Mês 7 representa Agosto
    { id: 1, title: "Groceries", amount: 150.25, date: new Date(2023, 4, 10) },
    { id: 2, title: "Rent", amount: 1200.0, date: new Date(2023, 3, 1) },
    { id: 3, title: "Utilities", amount: 200.0, date: new Date(2023, 2, 5) },
    {
      id: 4,
      title: "Entertainment",
      amount: 50.0,
      date: new Date(2023, 12, 8),
    },
    { id: 5, title: "Healthcare", amount: 80.5, date: new Date(2023, 10, 3) },
  ];
  return React.createElement(
    "div",
    {},
    React.createElement(ExpenseContainer, {expenses: expenses})
  );
}

export default App;
