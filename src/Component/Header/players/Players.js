import React, { useState,useEffect } from 'react';
import Player from '../Player/Player';
import './Players.css';
import playersData from '../../../Data/PlayerData.json'
import Cart from '../Cart/Cart';


const Players = () => {
    const [players,setPlayers]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        setPlayers(playersData)
    },[])
    const handleAddPlayer=(player)=>{
        console.log('added')
        const newCart=[...cart,player]
        setCart(newCart)
    }
    return (
        <div className="Players-container">
            
            <div className="Player-container">
            <h1>total Players:{players.length}</h1>
            <ul>
                {
players.map(player =><Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
                }
            </ul>
            </div>
            <div className="cart-container" >
                <Cart cart={cart}></Cart>
            
            </div>
            
        </div>
    );
};

export default Players;