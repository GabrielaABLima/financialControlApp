import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    { id: 0, title: "Car Insurance", amount: 294.67, date: new Date(2023, 7, 11) }, // Mês 7 representa Agosto
    { id: 1, title: "Groceries", amount: 150.25, date: new Date(2023, 7, 10) },
    { id: 2, title: "Rent", amount: 1200.0, date: new Date(2023, 7, 1) },
    { id: 3, title: "Utilities", amount: 200.0, date: new Date(2023, 7, 5) },
    { id: 4, title: "Entertainment", amount: 50.0, date: new Date(2023, 7, 8) },
    { id: 5, title: "Healthcare", amount: 80.5, date: new Date(2023, 7, 3) }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} />
      <ExpenseItem title={expenses[5].title} amount={expenses[5].amount} date={expenses[5].date} />
    </div>
  );
}

export default App;
