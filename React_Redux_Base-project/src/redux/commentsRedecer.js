import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE} from "./types"
const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) =>{
    switch(action.type) {
        case COMMENT_CREATE:
          return{
            ...state,
            comments: [...state.comments, action.data]
          }
          case COMMENT_UPDATE:
            const {data} = action
            const {comments} = state
            const itemIndex = comments.findIndex(res=>res.id === data.id)

            const nextComments = [
              ...comments.slice(0, itemIndex),
              data,
              ...comments.slice(itemIndex + 1)
            ]
          return{
            ...state,
            comments: nextComments
          }
          case COMMENT_DELETE:
            return(()=>{
               const {id} = action
            const {comments} = state
            const itemIndex = comments.findIndex(res=>res.id === id)

            const nextComments = [
              ...comments.slice(0, itemIndex),
              ...comments.slice(itemIndex + 1)
            ]
          return{
            ...state,
            comments: nextComments
          }
            })()
           
          default:
            return state
    }
}