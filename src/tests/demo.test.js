describe('preubas en el archivo demo.test', () => {
    test('los strings deben ser iguales', ()=>{
        //1. inicializacion 
        const mensaje = 'Hola Mundo';
    
        //2. estimulo
        const mensaje2 ='Hola Mundo';
    
        //3. observar el comportamiento
        expect(mensaje).toBe(mensaje2); // comparacion de equidad
    })    
})


