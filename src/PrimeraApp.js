import React from 'react';
//import React, { Fragment } from 'react';

const PrimeraApp = () =>{
    //los booleanos no se imprimen en principio
    //si se pone un arreglo los concatena uno tras otr sin la coma [1,2,3] = 123
    //los obejtos dan error al imprimir en principio solo con las llaves, para eso se debe utilizar un JSON.stringify
    const saludo = {
        nombre:'Tomas',
        edad: 32
    };
    return (
        <>
            <h1> Hola { saludo.nombre } </h1>
            <pre> { JSON.stringify( saludo, null, 3) } </pre>
            <p>asdasdasd</p>
        </>
    );
}

export default PrimeraApp;