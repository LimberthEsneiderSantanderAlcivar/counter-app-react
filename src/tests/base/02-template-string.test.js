import { getSaludo } from "../../base/02-template-string";

describe('pruebas en 02-template-string.js ', () => {
    test('debe retornar Hola y un nombre que se envia en el metodo getSaludo', () => {
        const nombre = 'Limbert';

        const saludo =getSaludo(nombre);

        expect(saludo).toBe('Hola '+nombre);
    })

    //get saludo debe retornar Hola Carlos si no se envia el nombre
    test('debe retornar Hola Carlos cuando no se enviar parametros en getSaludo ', () => {
        const saludo = getSaludo();
        
        expect(saludo).toBe('Hola Carlos');
    })
    
})
