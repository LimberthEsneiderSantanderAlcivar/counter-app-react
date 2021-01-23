import React from 'react';
import PropTypes from 'prop-types'
//import React, { Fragment } from 'react';

const PrimeraApp = ({saludo = 'Hola Mundo'}) =>{

    return (
        <>
            <h1> { saludo } </h1>
            <p>asdasdasd</p>
        </>
    );
}
//para agregar validaciones a los campos que se envan desde otro modulo
//se realiza importando PropTypes de 'prop-types'
//se hace refrencia a la constante que va a ser exportada y 
//dentro se agregan las validaciones de cada una varuiables de 
//entrada, hay algunas, revise, investigue
PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;