import { useState } from "react";
import imageMusic from "../assets/images.jpg"
import { IconContext } from "react-icons";
import "./PlayList.css"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
export default function List() {
  const [isPlaying, setIsPlaying] = useState(false);
  
   const playingButton = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      
    }
  };

return (
  <>
  <div className="component"> 
       <img className="musicCover" src={imageMusic} />
          <div className="component_title">
              <h2 className="title">title</h2>
                 <p className="subTitle">autor</p>
    
  </div>
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
        <div>
    
    
    <input type="range" min="1" max="100" ></input>
   <div className="time">
      <p>
        time
      </p>
      <p>
        time
      </p>
  </div>
     <input type="range"></input>
  </div>
</div>
</>
)
}