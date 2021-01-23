import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 5})=>{

    //hook de sue state
    const [ counter, setCounter ] = useState(0);

    //handleAdd
    const handleAdd =(e)=>{
        setCounter(counter +1);
        //setCounter((c)=>c+1);
    }
    //handleSubstract
    const handleSubstract =(e)=>{
        setCounter(counter -1);
        //setCounter((c)=>c-1);
    }
    //handleReset
    const handleReset =(e)=>{
        setCounter(0);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleAdd }>+1</button>
        </>
    );
}
CounterApp.propTypes={
    value : PropTypes.number.isRequired
}
export default CounterApp;
