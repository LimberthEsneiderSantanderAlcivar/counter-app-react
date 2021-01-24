import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('preubas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe async ', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe =>{
                expect(heroe).toEqual(heroes[0]);
                done();
            });
    });
    

    test('debe de obtener un error si heroe por el id nop existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(err=>{
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
    
})
