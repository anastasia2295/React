import React from "react";
import { styled }  from "styled-components"
import Pausa from "../home/assets/Pausa.svg"
import Play from "../home/assets/Play.svg"
import Playing from "../home/assets/Playing.svg"


const Li = styled.li`
display: flex;   
background-color: #252020;
width: 100%;
color: ${({$invalid})=> $invalid ? `#9c088e` : `#bab6b6`}; 
max-width: 900px;
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
    width: 40%;
`
const Image = styled.div`
img{
border-radius: 50%;
      height: 3rem;
    box-shadow: 0 0 2px 2px #9c088e;
  }
`
const ButtonPlay = styled.div`
display: flex;
`
const ButtonPausa = styled.div`
padding-right: 2rem;
`


 export default function Treck ({index, image, id, time,title, artist,  }) {
    return(
        <ul >
                <Li $invalid = {activeItem === index}
                >
                  <div >
                        <h3>{id}</h3>
                    </div>
                    
                    <Image>
                        <img  src={image} />
                    </Image>
                    <Title >
                        <p>{title + " - " + artist}</p>
                    </Title>
                    <div >
                        {Math.floor(time / 60) + ':' + time % 60}
                    </div>
                    <div>
                        {activeItem === index && isPlaying ? (
                            <ButtonPlay>
                                <ButtonPausa >
                                 <img src={Playing} />
                                </ButtonPausa>
                                <Button  onClick={()=> handlePausa()} >
                             <img src={Pausa} width="22" height="22" />
                          </Button>
                           </ButtonPlay>
                        ) : (
                          <Button  onClick={()=> handlePlay(index)} >
                             <img src={Play} width="22" height="22" />
                          </Button>
                        )
                         }
                    </div>
                </Li>
                </ul>
    )
 }