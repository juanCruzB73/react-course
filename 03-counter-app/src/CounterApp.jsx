import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp=({value})=>{
    const [counter,setCounter]=useState(value);
    const handleAdd=()=>{
        setCounter(counter+1)
    }
    const handleDecrease=()=>{
        counter>0?setCounter(counter-1):counter
    }
    const handleReseat=()=>{
        setCounter(value)
    }

    return (
    <>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleDecrease}>-1</button> 
        <button onClick={handleReseat}>reset</button>
    </>
)};
//DEFINIEDO PROPTYPES
CounterApp.propTypes={
    value:PropTypes.number.isRequired//debe existir y ser string
};