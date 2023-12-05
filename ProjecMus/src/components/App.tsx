import axios from "axios";
import { useState } from "react";
import { Component } from "react";
import PlayerMaket from "./components/PlayerMaket";
import { CORE_CONCEPTS } from './components/data';
const baseUrl = "https://reqres.in/api/users?page=1"
import { HiStatusOnline } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";
import { HiPause } from "react-icons/hi";
import "./components/PlayList.css"

class App extends Component {
   
  state={
    CORE_CONCEPTS, active: null
  }
  onClick = e =>{
    this.setState({
      active: e.target.dataset.index,
    })
  }

  render() {
    const {CORE_CONCEPTS, active} = this.state
  

  return (
    <div className="App">
      <ul>
            {CORE_CONCEPTS.map((item, i) => (
            
              <div key={item.id} data-index ={i} className= { i === active? "active" : "component"}>
              <h2>{item.id}</h2>
              <img className="musicCover" src={item.image} />
                 <div className="component_title">
                     <h2 className="title">{item.title}</h2>
                     <p className="subTitle">{item.artist}</p>
                 </div>
          <div>
              <div className="time">
                <p>
                  {item.time}
                </p>
              </div>
            </div>
            
            <div >
             
                 <HiPlay size={40} onClick={this.onClick}/>
        
            <div className="play">
              <div className="play1">
                  <HiStatusOnline size={40}/>
              </div>
                  <HiPause size={40} onClick={this.onClick}/>
            </div>
      
          </div>
          </div>
            ))}
          </ul>
    
    </div>
  );
}
}
export default App