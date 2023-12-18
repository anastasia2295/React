import { useEffect, useState } from "react";
import {useSound}  from "use-sound";
import qala from "./assets/Lesa FS - Между нами.mp3";
import { styled }  from "styled-components"
import "../PlayList/Player.css"
import React from "react";
import Pausa from "./assets/Pausa.svg"
import Volume from "./assets/Group (1).svg"
import Play from "./assets/Play.svg"
import Playing from "./assets/Playing.svg"
import imageMusic from "./assets/images.jpg"

const Li = styled.li`
display: flex;   
background-color: #1a1918;
width: 95%;
font-weight: bold;
font-size: 1.1rem ;
color: ${({$invalid})=> $invalid ? `#9c088e` : `#bab6b6`}; 
max-width: 59.4rems;
padding: 0.8rem;
margin: 1rem auto;
justify-content: space-around; 
border:${({$invalid})=> $invalid ? `1px solid #212121` : `1px solid #212121`};
border-radius: 5px;
align-items: center ;
box-shadow:${({$invalid})=> $invalid ? `0 0 5px 2px #E283D2` : `none`}  ;
`

const Button = styled.button`
background-color: #e03e2500; 
    border: none; 
    &:hover{
      cursor: pointer;
    }
    
`

const Title = styled.div`
display: flex;
    justify-content: flex-start;
    width: 50%;
`
const Image = styled.div`
img{
border-radius: 55%;
      height: 3.8rem;
    box-shadow: 0 0 2px 2px #9c088e;
  }
`
const ButtonPlay = styled.div`
display: flex;
`
const ButtonPausa = styled.div`
padding-right: 2rem;
`
const Time = styled.div`
display: flex;
justify-content: space-between;
`

export default function Player() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState({
      min: "",
      sec: ""
    });
    const [currTime, setCurrTime] = useState({
      min: "",
      sec: ""
    });
  
    const [seconds, setSeconds] = useState();
  
    const [play, { pause, duration, sound }] = useSound(qala);
  
    useEffect(() => {
      if (duration) {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        setTime({
          min: min,
          sec: secRemain
        });
      }
    }, [isPlaying]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (sound) {
          setSeconds(sound.seek([]));
          const min = Math.floor(sound.seek([]) / 60);
          const sec = Math.floor(sound.seek([]) % 60);
          setCurrTime({
            min,
            sec
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [sound]);
  
    const playingButton = () => {
      if (isPlaying) {
        pause();
        setIsPlaying(false);
      } else {
        play();
        setIsPlaying(true);
        
      }
    };

  return (
    
    <div className="component">
        
      <img className="musicCover" src={imageMusic} />
      <div>
        <h2 className="title">title</h2>
        <p className="subTitle">autor</p>
      </div>
      <div>
                      {isPlaying ?  (
                            <ButtonPlay>
                                <ButtonPausa >
                                 <img src={Playing} />
                                </ButtonPausa>
                                <Button  onClick={()=>playingButton()} >
                             <img src={Pausa} width="22" height="22" />
                          </Button>
                           </ButtonPlay>
                        ) : (
                          <Button  onClick={()=>playingButton()}>
                             <img src={Play} width="22" height="22" />
                          </Button>
                        )
                         }
                    </div>
      <div>
        <Time >
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
         
        </Time>
        
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
      <div>
        <img src={Volume}/>
      </div>
      <div>
      <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
        
        />
      </div>
    </div>
  );
}
