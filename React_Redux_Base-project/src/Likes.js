import {Connect} from "react-redux"
import { decrementLikes, incrementsLikes } from "./redux/actions"

function Likes(props) {
    return(
        <div className="button-controls">
            <button onClick={props.OnIncrementLikes}>{props.likes}</button>
            <button onClick={props.OnDecrementLikes}>Dislike</button>
        </div>
    )
}


function mapStateToProps(state) {
    const {likesReducer} = state
    return{
        likes:likesReducer.likes
    }
}

 function mapDispatchToProps(dispatch){
    return{
        OnIncrementLikes: () => {
           return dispatch(incrementsLikes())
        },
        OnDecrementLikes: () => {
           return dispatch(decrementLikes())
         }
    }
 }
export default Connect(mapStateToProps, mapDispatchToProps)(Likes)