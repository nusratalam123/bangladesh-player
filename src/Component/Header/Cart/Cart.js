import React from 'react';
import Player from '../Player/Player';

const Cart = (props) => {
    const cart=props.cart;

    //   const total=cart.reduce((total,ply)=>total+Number(ply.salary),0)
     let total=0;
    for( let i=0;i<cart.length;i++){
const element=cart[i];
total=total+Number(element.salary);
    }
    let name='',Salary=0;
    for( let i=0;i<cart.length;i++){
const element=cart[i];
name=name+element.name

Salary=Salary+Number(element.salary)}
    
    
    return (
        <div>
            <h1>Total counted players:{cart.length}</h1>
            <h4> Total Counted player salary:{total}</h4>
            <h5><li>Counted player name:{name}</li></h5>
            <h5>Counted player salary:{Salary}</h5>
            {/* <h5> Total Counted player salary:{total}</h5> */}
        </div>
    );
};

export default Cart;