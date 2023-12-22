import { useEffect, useState, useRef } from "react";
import useSound from "use-sound";
import gala from "./assets/Melanie Martinez - Cake.mp3";
import { styled }  from "styled-components"
import "../PlayList/Player.css"
import React from "react";
import Pausa from "./assets/Pausa 2.svg"
import Volume from "./assets/Group (1).svg"
import Play from "./assets/Play.svg"
import imageMusic from "./assets/images.jpg"



const Button = styled.button`
background-color: #e03e2500; 
    border: none; 
    &:hover{
      cursor: pointer;
    }
    padding-right: 5rem;
    
`
const Time = styled.div`
display: flex;
justify-content: space-between;
`

const PlayerComponent = styled.li`
display: flex;   
background-color: #1a1918;
width: 95%;
font-weight: bold;
font-size: 1.1rem ;
color: ${({$invalid})=> $invalid ? `#9c088e` : `#bab6b6`}; 

margin: 1rem;
justify-content: space-around; 
border:${({$invalid})=> $invalid ? `1px solid #212121` : `1px solid #212121`};
border-radius: 5px;
align-items: center ;
box-shadow:${({$invalid})=> $invalid ? `0 0 5px 2px #E283D2` : `none`}  ;
`
const Image = styled.div`
img{
    margin:1rem;
border-radius: 55%;
      height: 5rem;
    box-shadow: 0 0 2px 2px #9c088e;
  }
`
const Title = styled.div`
width: 10%;
    align-items: start ;
   
`
const FlexBox = styled.div`
display: flex;
`
const ButtonVolume = styled.div`
padding-right: 2rem;
color: ${({$invalid})=> $invalid ? `#9c088e` : `#bab6b6`};
width: 20px;
`
interface PlayerDescription {
  audio: any,
  image:  string,
  title: string,
  time: number ,
  artist: string 
  
}
    interface PlayerProps {
      
       audio: any;
       title: string;
       switchingPlayaButton: ()=> void;
       time: number ;
       artist: string ;
       image:  string;
      handleVolume: ()=> void ; 
    
     } 

const sound:PlayerDescription = {
    
        audio: gala,
        image: imageMusic,
        title: 'Heat Waves',
        time: 210,
        artist: 'Glass Animals'
}
 const  Player1: React.FC<PlayerProps> = ()  => {
    
     const [time, setTime] = useState({
         min: "",
         sec: ""
       });
       const [currTime, setCurrTime] = useState({
         min: "",
         sec: ""
       });
      //  const duration:number = soundRef.current?.duration;
     const [play, setPlay] = useState(false)
     const soundRef: React.RefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(null)
     const MAX = 20
   
    //  const onSetVideoTimestamp = (event: React.ChangeEvent<HTMLMediaElement>):void => {
    //   const {currentTime} = event.target
    //   const time = Number(currentTime)
    //   soundRef.current!.currentTime = time;
    // }
    const [seconds, setSeconds] = useState();
    const duration:number = soundRef.current?.duration;
       const ct:number =  soundRef.current?.currentTime

      //  useEffect(() => {
      //   if (duration) {
      //     const sec = duration / 1000;
      //     const min = Math.floor(sec / 60);
      //     const secRemain = Math.floor(sec % 60);
      //     setTime({
      //       min: min,
      //       sec: secRemain
      //     });
      //   }
      // }, [play]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          if (ct) {
            setSeconds(ct);
            const min = Math.floor(ct / 60);
            const sec = Math.floor(ct % 60);
            setCurrTime({
              min,
              sec
            });
          }
        }, 1000);
        return () => clearInterval(interval);
      }, [ct]);

  //   function handleProgress(e: React.ChangeEvent<HTMLInputElement>): void{
      
       
  //     const {value} =  e.target;
  //     const currentTime = Number(value)/ 100 ;
  //     soundRef.current!.currentTime = currentTime;
  //     console.log(currentTime)
  //  }
     function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void{
        const {value} =  e.target;
        const volume = Number(value) / MAX;
        soundRef.current!.volume = volume;
     }

    const  switchingPlayaButton= () => {
        if (play) {
          soundRef.current?.pause()
          setPlay(false);
        } else {
          void soundRef.current?.play();
          setPlay(true);
          
        }
      };
    
    return (
        
       <PlayerComponent $invalid = {play}
       > 
        <Image>
            <img src={imageMusic} />
        </Image>
        <Title>
          <h2 >{sound.artist}</h2>
          <p >{sound.title}</p>
        </Title>
        
        <div>
            {play ?  (
            <Button onClick={switchingPlayaButton} >
                <img src={Pausa} width="40" height="40" />
                 </Button>
                 ) : (
                 <Button   onClick={switchingPlayaButton} >
                    <img src={Play} width="25" height="25" />
                </Button>
                )}
        </div>
        <FlexBox>
            <div>
                <Time >
                    <p>
                         {currTime.min}:{currTime.sec}
                    </p>
                     <p>
                     {Math.floor(sound.time / 60) + ':' + sound.time % 60}
                    </p>
                </Time>
                
        <input
        type="range"
        min="0"
        step={ct}
        max={ct / 1000}
        value={seconds}
        onChange={(e) => {
          ct[e.target.value];
        }}
          // type="range"
          // min="0"
          // max="10"
          
          
          // onChange={(e) => handleProgress(e)}
          />
        </div>
        </FlexBox>
        <FlexBox>
        <ButtonVolume 
        >
           <img src={Volume} width="30" height="20"/>
        </ButtonVolume>
        <div>
           <input
              type="range"
              min={0}
              max={MAX}
              onChange={(e) => handleVolume(e)}
          />
       </div>
       </FlexBox>
       <div>
       <audio ref={soundRef} loop src={sound.audio}  />
       </div>
 </PlayerComponent>
 )
 }

 export default Player1