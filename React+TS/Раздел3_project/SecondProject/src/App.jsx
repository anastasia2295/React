import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"
import Result from "./components/Result"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})

const inputIsValid = userInput >=1

function handlerChange(inputIdentifier, newValue){
setUserInput(prevUserInput => {
    return{
        ...prevUserInput,
        [inputIdentifier]: +newValue
    }
})
}

  return (
    <>
    <Header></Header>
    <UserInput userInput={userInput} onChange={handlerChange}></UserInput>
    {!inputIsValid && <p className="center">Please enter valid input data</p>}
    {inputIsValid && <Result input={userInput}></Result>}
    </>
  )
}

export default App
