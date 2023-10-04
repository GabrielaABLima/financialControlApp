import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseContainer.css";
import Card from "../UI/Card";

const ExpenseContainer = (props) => {
    return(
        <Card className="expenses">
            <h2>Let's get started!</h2>
            <p>This is also visible</p>
            {props.expenses.map((expense) => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card>
    );
}

export default ExpenseContainer;