import React, {useState} from "react";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const calculateHandler = (userInput) => {
    const [results, setResults] = useState(null)

    const yearlyData = []; 

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
     
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
setResults(yearlyData)

  };

  return (
    <div>
      <Header/>

      <UserInput onCalculate={calculateHandler} />

      <ResultTable/>
    </div>
  );
}

export default App;
