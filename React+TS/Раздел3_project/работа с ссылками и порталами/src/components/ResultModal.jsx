import {forwarRef, useImperativeHandle, useRef} from "react"

const ResultModal = forwarRef(function Resultodal ({ result, targetTime, remainingTime}, ref){
    const dialog = useRef()
    const userLost = remainingTime <=0

    const formatterRemainingTime = {remainingTime / 1000}.toFixed(2)

    
    useImperativeHandler(ref, () =>{
        return {
           open(){
             dialog.current.showModal()
}
        }
    })
    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You {result}</h2>}
            <p>The target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped the timer with x seconds left</p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}) 
export default ResultModal