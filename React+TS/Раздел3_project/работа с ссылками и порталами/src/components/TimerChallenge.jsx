import { useState, useRef } from "react"

export default function TimerChallenge ({title, targetTime}){
    const timer = useRef
    const dialog = useRef
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000)
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000
    
    if(timeRemaining <=0) {
        clearInterval(timer.current)
        setTimeRemaining(targetTime * 1000)
        dialog.current.open()
    }
    function handlerStart(){
        
        timer.current = setInterval(()=>{
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining -10)
        }, 10)
        
    }
    function handlerStop(){
        dialog.current.open()
       clearInterval(timer.current)
    }
    return(
        <>
        {timerExpired && <ResultModal ref={dialog} 
        targetTime={targetTime}
        remainingTime = {timeRemaining}
        />}
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime>1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerIsActive ? handlerStop:handlerStart }>
                    {timerIsActive ? "Stop" : "Start"} challenge
                </button>
            </p>
            <p className={timerIsActive ? "active" : undefined}>
                {timerIsActive? "Time is running" : "Timer inactive"}/
            </p>
        </section>
        </>
    )
}