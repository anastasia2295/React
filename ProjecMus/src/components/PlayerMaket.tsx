import {  useState } from "react";
import "./PlayList.css"
import { Component } from "react";
import "../components/PlayList.css"
import { CORE_CONCEPTS } from './data';
import { HiStatusOnline } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";
import { HiPause } from "react-icons/hi";

class PlayerMaket extends Component {

    
    state = {
    activeItem: null,
    isPlaying: false
    };
    handlePausa = (index) =>{
        this.setState({activeItem:index, isPlaying:false })
    }
    handleClick = (index) => {
    this.setState({ activeItem: index, isPlaying: true });
    };
    render() {
    const { activeItem, isPlaying } = this.state;
    return (
    <ul className="list">
    {CORE_CONCEPTS.map((item, index) => (
    <li
    className={activeItem === index ? 'active' : 'component'}
    
    key={index}
    >
            <h2>{item.id}</h2>
            <img className="musicCover" src={item.image} />
               <div className="component_title">
                   <h2 className="title">{item.title}</h2>
                   <p className="subTitle">{item.artist}</p>
               </div>
        <div>
            <div className="time">
              <p>
                {item. time}
              </p>
            </div>
          </div>
          
          <div >
          {activeItem === index && isPlaying===true ? (
                   <div className="play">
                   <div className="play1">
                       <HiStatusOnline size={40}/>
                   </div>
                       <HiPause size={40} onClick={() => this.handlePausa(index)}/>
                       
                 </div>
                  ) : (
             <HiPlay size={40} onClick={() => this.handleClick(index)}/>
         )}
        </div>
    </li>
    ))}
    </ul>
    );
    }
    }
    export default PlayerMaket;
    
// export default function PlayerMaket ({ id, image, title, artist, time}) {
    
//         const [isPlaying, setIsPlaying] = useState(false);

  
//         const playingButton = () => {
//          if (isPlaying) {
//            setIsPlaying(false);
//          } else {
//            setIsPlaying(true);
//          }
//        };
  
//   return (
//         <div className="component">
//             <h2>{id}</h2>
//             <img className="musicCover" src={image} />
//                <div className="component_title">
//                    <h2 className="title">{title}</h2>
//                    <p className="subTitle">{artist}</p>
//                </div>
//         <div>
//             <div className="time">
//               <p>
//                 {time}
//               </p>
//             </div>
//           </div>
          
//           <div >
//              {!isPlaying ? (
//                  <HiPlay size={40} onClick={playingButton}/>
//         ) : (
//             <div className="play">
//               <div className="play1">
//                   <HiStatusOnline size={40}/>
//               </div>
//                   <HiPause size={40} onClick={playingButton}/>
//             </div>
//         )}
        
//         </div>
//         </div>
//       );
// }