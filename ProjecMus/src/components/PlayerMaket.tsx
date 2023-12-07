import "./PlayList.css"
import { Component } from "react";
import "../components/PlayList.css"
import { CORE_CONCEPTS } from './data';
import { HiStatusOnline } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";
import { HiPause } from "react-icons/hi";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { CiStreamOn } from "react-icons/ci";


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
              <p>
                {item. time}
              </p>
            </div>
          <div className="button">
          {activeItem === index && isPlaying===true ? (
            
                   <div className="play">
                   <div className="play1">
                       <CiStreamOn size={35}/>
                   </div>
                       <CiPause1 size={35} onClick={() => this.handlePausa(index)}/>
                 </div>
                  ) : (
             <CiPlay1  size={35} onClick={() => this.handleClick(index)}/>
             
         )}
        </div>
        
    </li>
    ))}
    </ul>
    );
    }
    }
    export default PlayerMaket;
