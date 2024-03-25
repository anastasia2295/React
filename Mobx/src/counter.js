 import { observer } from "mobx-react-lite"
import counter from "./store/counter"

const  Counter = observer(() => {
    return (
        <div>
            {"Count = " + counter.count}
            <button onClick={counter.increment()}>+</button>
            <button onClick={counter.decrement()}>-</button>
        </div>
)})

export default Counter