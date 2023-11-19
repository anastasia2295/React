import { useState, useRef } from "react"

export default function TimerChallenge ({title, targetTime}){
    const timer = useRef
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)
    
    function handlerStart(){
        setTimerStarted(true)
        timer.current = setTimerExpired(()=>{
            setTimerExpired(true)
        }, targetTime*1000)
    }
    function handlerStop(){
       clearTimeout(timer.current)
    }
    return(
        <>
        {timerExpired && <ResultModal targetTime={targetTime}/>}
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime>1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerStarted ? handlerStop:handlerStart }>
                    {timerStarted ? "Stop" : "Start"} challenge
                </button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted? "Time is running" : "Timer inactive"}/
            </p>
        </section>
        </>
    )
}