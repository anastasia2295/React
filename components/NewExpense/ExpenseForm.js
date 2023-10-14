import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () =>{
     const [enteredTitle, setEnteredTitle] = useState("")
     const [enteredAmaunt, setEnteredAmaunt] = useState("")
     const [enteredDate, setEnteredDate] = useState("")
// const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmaunt: "",
//     enteredDate: ""
// })
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //   enteredTitle:event.target.value,  
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }
    const amauntChangeHandler = (event) => {
         setEnteredAmaunt(event.target.value)
        // setUserInput({
        //     ...userInput,
        //   enteredAmaunt:event.target.value,  
        // })
    }
    const dateChangeHandler = (event)=>{
         setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //   enteredDate:event.target.value,  
        // })
    }

    const submitHandler =(event) =>{
        event.preventDefault();
        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmaunt,
            date: new Date(enteredDate)
        }
        console.log(expenseDate)
        setEnteredTitle("")
        setEnteredAmaunt("")
        setEnteredDate("")
    }

return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onInput={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmaunt}  onInput={amauntChangeHandler} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate}  onInput={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
)
};

export default ExpenseForm;

