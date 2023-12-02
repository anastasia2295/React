import {  useState } from "react";
import "./PlayList.css"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import "../components/PlayList.css"
import imageMusic from "../assets/images.jpg"


export default function PlayerMaket () {
    
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
            <h2>id</h2>
            <img className="musicCover" src={imageMusic} />
               <div className="component_title">
                   <h2 className="title">title</h2>
                   <p className="subTitle">autor</p>
               </div>
        <div>
            <div className="time">
              <p>
                time
              </p>
            </div>
          </div>
          <div>
          {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em"}}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        
        </div>
        </div>
      );
}