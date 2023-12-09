import { useState } from "react";
import {Pausa} from "../assets/"
import "./PlayList.css"
import React from "react";

const  musicList = [
    {
      id: 1,
      image: null,
      title: "Easy on Me",
      artist:
        'Адель',
        time: 3.36
    },
    {
      id:2,
      image: null,
      title: 'Heat Waves',
      artist:
        'Glass Animals',
      time: 4.36
    },
    {
      id:3,
      image: null,
      title: 'Break My',
      artist:
        'Бейонсе',
      time: 4.56
    },]

    export default function PlayList () {
        const [isPlaying, setIsPlaying] = useState(false)
        const[activeItem, setActiveItem] = useState(null)
        const handleClick=(index) =>{
            setActiveItem(index),
            setIsPlaying(true)
        };
        const handlePausa = (index) => {
            if(isPlaying) {
                setIsPlaying(false)
            } else {
                setIsPlaying(true)
            }
        }


        return(
            musicList.map((item, index)=>(
                <li className=
                {activeItem=== index ? "active" : "component"}
                >
                    <div className="component_id">
                        <h3>{item.id}</h3>
                    </div>
                    <div>
                        <img className="musicCover"  />
                    </div>
                    <div className="component_title">
                        <p className="title">{item.title}</p>
                        <p>-</p>
                        <p className="subTitle">{item.artist}</p>
                    </div>
                    <div className="component_time">
                        {item.time}
                    </div>
                    <div className="button">
                        {activeItem === index && isPlaying ? (
                            <div className="play">
                                <div className="play1">
                                    <button>звук</button>
                                </div>
                                <img src="../assets/Pausa.svg" onClick={() => handlePausa(index)}/>
                            </div>
                        ) : (
                            <button onClick={() => handleClick(index)}>play</button>
                        )
                         }
                    </div>
                </li>
            ))
        )
    }