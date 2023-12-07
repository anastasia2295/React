import "./PlayList.css"
import {useState} from "react"
import "./PlayList.css"
import { musicList } from '../assets/musicList';
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { CiStreamOn } from "react-icons/ci";


function PlayList () {
 const [isPlaying, setIsPlaying] = useState(false)
 const [activeItem, setActiveItem] = useState(null)
   
  const   handlePausa  = () => {
        if (isPlaying) {
          setIsPlaying(false);
        } else {
          setIsPlaying(true);
        }
      };
    const handleClick = (index) => {
     setActiveItem({ activeItem: index, isPlaying: true });
    };
       return (
        
         <ul className="list">
             {musicList.map((item, index) => (
                 <li className=
                 {activeItem === index ? 'active' : 'component'}
                 key={index}
    >
                 <div className="component_id">
                    <h3>{item.id}</h3>
                 </div>
                 <div className="component_image">
                    <img className="musicCover" src={item.image} />
                 </div>
                 <div className="component_title">
                    <p className="title">{item.title} </p>
                    <p> - </p>
                    <p className="subTitle">{item.artist}</p>
               
                  </div>
        
                  <div className="component_time">
                    <p> {item. time} </p>
                  </div>
                 <div className="button">
                      {activeItem === index && isPlaying===true ? (
                         <div className="play">
                            <div className="play1">
                                <CiStreamOn size={35}/>
                           </div>
                       <CiPause1 size={35} onClick={() => handlePausa(index)}/>
                         </div>
                  ) : (
             <CiPlay1  size={35} onClick={() => handleClick(index)}/>
         )}
                   </div>
        
    </li>
    ))}
    </ul>
    );
    }
    
    export default PlayList;
