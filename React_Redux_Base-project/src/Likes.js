import {Connect} from "react-redux"

function Likes(props) {
    return(
        <div className="button-controls">
            <button onClick={props.OnIncrementLikes}>{props.likes}</button>
            <button>Dislike</button>
        </div>
    )
}


function mapStateToProps(state) {
    return{
        likes: state.likes
    }
}

 function mapDispatchToProps(dispatch){
    return{
        OnIncrementLikes: () => {
           const action = {type: "INCREMENT"}
           dispatch(action)
        }
    }
 }
export default Connect(mapStateToProps, mapDispatchToProps)(Likes)