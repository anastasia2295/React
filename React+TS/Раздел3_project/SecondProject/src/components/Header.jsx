import investCalc from "../assets/investment-calculator-logo.png"
import "Header.css"

function Header () {
    return (
    <header id="header">
      <img src={investCalc} alt="Logo"></img>
      <h1>Investment Calculator</h1>
    </header>
    )
}

export default Header
