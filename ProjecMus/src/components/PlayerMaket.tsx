import {  useState } from "react";
import "./PlayList.css"
import "../components/PlayList.css"
import imageMusic from "../assets/images.jpg"
import { HiStatusOnline } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";
import { HiPause } from "react-icons/hi";


export default function PlayerMaket ({ id, image, title, artist, time}) {
    
        const [isPlaying, setIsPlaying] = useState(false);

  
        const playingButton = () => {
         if (isPlaying) {
           setIsPlaying(false);
         } else {
           setIsPlaying(true);
         }
       };
  
  return (
        <div className="component">
            <h2>{id}</h2>
            <img className="musicCover" src={image} />
               <div className="component_title">
                   <h2 className="title">{title}</h2>
                   <p className="subTitle">{artist}</p>
               </div>
        <div>
            <div className="time">
              <p>
                {time}
              </p>
            </div>
          </div>
          
          <div >
             {!isPlaying ? (
                 <HiPlay size={40} onClick={playingButton}/>
        ) : (
            <div className="play">
              <div className="play1">
                  <HiStatusOnline size={40}/>
              </div>
                  <HiPause size={40} onClick={playingButton}/>
            </div>
        )}
        
        </div>
        </div>
      );
}