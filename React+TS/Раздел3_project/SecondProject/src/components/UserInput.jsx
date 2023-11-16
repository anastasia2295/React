import { useState } from "react"

import "UserInput.css"

function UserInput () {

const [UserInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})
function handlerChange(inputIdentifier, newValue){
setUserInput(prevUserInput => {
    return{
        ...prevUserInput,
        [inputIdentifier]: newValue
    }
})
}

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                    type="number" 
                    required 
                    value={UserInput.initialInvestment}
                    onChange={(event) => handlerChange("initialInvestment", event.target.value)}
                    ></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                    type="number" 
                    required
                    value={UserInput.annualInvestment}
                    onChange={(event) => handlerChange("annualInvestment", event.target.value)}
                    ></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                    type="number" 
                    required
                    value={UserInput.expectedReturn}
                    onChange={(event) => handlerChange("expectedReturn", event.target.value)}
                    ></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                    type="number" 
                    required
                    value={UserInput.duration}
                    onChange={(event) => handlerChange("duration", event.target.value)}
                    ></input>
                </p>
            </div>
        </section>
    )
}

export default UserInput