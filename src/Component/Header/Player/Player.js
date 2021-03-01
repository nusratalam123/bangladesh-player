import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faPlus} from '@fortawesome/free-solid-svg-icons'


import './Player.css'


const Player = (props) => {
    const {name,img,age,type,salary}=props.player
    const imagePlayer={width:'200px'}
    return (
        <div className="player" >
            <h1>this is players name:{name}</h1>
            <img style={imagePlayer} src={img} alt=""/>
            <h5>this is players age:{age}</h5>
            <h5>this is players type:{type}</h5>
            <h5>this is players salary:{salary}</h5>
            <button className="button" onClick={()=>props.handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>  add players</button>
        
        </div>

    );
};

export default Player;