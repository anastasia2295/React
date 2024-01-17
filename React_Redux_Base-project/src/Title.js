import {useDispach, useSelector} from "react-redax"
import { inputText } from "./redux/actions"

function Title(props) {

    const dispatch = useDispach()
    const text = useSelector(state=>{
        const {inputReducer } = state
        return inputReducer.text
    })
    const handleChange = (e) => {
        dispatch(inputText(e.target.value))
    }
    return(
        <div className="card-title">
            <div className="card-title-top">
                <input type="text" onChange={handleChange}/>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Title