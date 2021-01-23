import React from 'react';
//import React, { Fragment } from 'react';

//Fragmen es para que sea un div el dual react va a "ignorar"
//se usa porque el return debe tener un elemento html padre principal
//que abarque todos los demas compoenentes
//otra manera de evitar eso es no importar ni susar fragment
//sino solo poner las etiquetas sin ningun texto dentro como se 
//ve en la etiqueta que encierra los componentes ahi abajito
const PrimeraApp = () =>{
    return (
        <>
            <h1>Hola Mundo</h1>
            <p>asdasdasd</p>
        </>
    );
}

export default PrimeraApp;