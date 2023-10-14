import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () =>{
    const [enteredTitle, setEnteredTitle] = useState("")
    const [eneredAmaunt, setEnteredAmaunt] = useState("")
    const [enteredDate, setEnteredDate] = useState("")
    
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }
    const amauntChangeHandler = (event) => {
        setEnteredAmaunt(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
    }
return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onInput={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onInput={amauntChangeHandler} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onInput={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
)
};

export default ExpenseForm;
