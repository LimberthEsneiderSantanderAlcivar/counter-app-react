import React from 'react';
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';

const PrimeraApp = ({saludo}) =>{

    return (
        <>
            <h1> { saludo } </h1>
            <p>asdasdasd</p>
        </>
    );
}
PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;