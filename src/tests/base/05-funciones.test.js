import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('pruebas en 05-funciones ', () => {
    test('getUser debe de retornar un objeto', () => {
        const usuario = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(usuario);
    })
    

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'El Pepe';
        
        const testActiveUser ={
            uid: 'ABC567',
            username: name
        };
        const activeUser = getUsuarioActivo(name);

        expect(activeUser).toEqual(testActiveUser);
    })
    
})
