import { INCREMENT, DECREMENT } from "./types";

export function incrementsLikes() {
    return{
        type: INCREMENT
    }
}

export function decrementLikes() {
    return{
        type: DECREMENT
    }
}