import { useEffect, useState } from "react";
import useSound from "use-sound";
import qala from "./assets/Lesa FS - Между нами.mp3";
import { styled }  from "styled-components"
import "../PlayList/Player.css"
import React from "react";
import Pausa from "./assets/Pausa.svg"
import Volume from "./assets/Group (1).svg"
import Play from "./assets/Play.svg"
import Playing from "./assets/Playing.svg"
import imageMusic from "./assets/images.jpg"


const  musicList = [
    {
      id: 1,
      image: imageMusic,
      title: "Easy on Me",
      artist:
        'Адель',
        time: 250
    },]
const ButtonPlay = styled.div`
display: flex;

`
const ButtonPausa = styled.div`
padding-right: 2rem;
`

const Button = styled.button`
background-color: #e03e2500; 
    border: none; 
    &:hover{
      cursor: pointer;
    }
    
`
const Time = styled.div`
display: flex;
justify-content: space-between;
`

const Li = styled.li`
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
const PlayPausa = styled.div`
display: flex;
`
const ButtonVolume = styled.div`
padding-right: 2rem;
`
export default function Player1() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [time, setTime] = useState({
        min: "",
        sec: ""
      });
      const [currTime, setCurrTime] = useState({
        min: "",
        sec: ""
      });
      
    
    
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
        
       <Li $invalid = {isPlaying}
       > 
        <Image>
        <img src={imageMusic} />
        </Image>
        <Title>
          <h2 >Title</h2>
          <p >autor</p>
        </Title>
        
        <div>
                   {isPlaying ?  (
                              <ButtonPlay>
                                  <ButtonPausa >
                                   <img src={Playing} />
                                  </ButtonPausa>
                                  <Button onClick={playingButton}  >
                               <img src={Pausa} width="22" height="22" />
                            </Button>
                             </ButtonPlay>
                          ) : (
                            <Button   onClick={playingButton} 
                             >
                               <img src={Play} width="22" height="22" />
                            </Button>
                          )
                          }
                      </div>
                      <PlayPausa>
                      <div>
                      <Time >
                         <p>  0 
                         </p>
                         <p> 0

                         </p>
                      </Time>
        <input
          type="range"
          min="0"
         />
        </div>
        </PlayPausa>
        <PlayPausa>
        <ButtonVolume>
           <img src={Volume}/>
        </ButtonVolume>
        <div>
           <input
              type="range"
              min="0"
          />
       </div>
       </PlayPausa>
       
                      </Li>
    
                        
    )
                    }