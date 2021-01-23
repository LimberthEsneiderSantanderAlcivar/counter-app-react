import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp'
import './index.css' 

const divRoot = document.querySelector('#root');


//para enviar parametros se envia despues del nombre de la 
//etiqueta, en caso de que no se envie al moemno de recirbir sera undefned
//por lo cual en el otro lado se podria poner un valor por default
ReactDOM.render(<PrimeraApp saludo = "hola soy goku" />, divRoot)

