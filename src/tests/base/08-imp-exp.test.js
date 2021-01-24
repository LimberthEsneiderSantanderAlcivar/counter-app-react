import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('preubas en funciones de exp ', () => {
    test('debe de retornar un heroe por el id', () => {
        const id = 1;
        const heroe =  getHeroeById(id);

        const heroeData = heroes.find((heroes)=>heroe.id ===id);

        expect(heroe).toEqual(heroeData);
    })
    test('debe de retornar undefined si el heroe no existe', () => {
        const id = 10;
        const heroe =  getHeroeById(id);

        expect(heroe).toBe(undefined);
    })
    
    test('debe retornar un arreglo con los heroes de DC cuando el owner es DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter((heroe)=> heroe.owner === owner);

        expect(heroes).toEqual(heroesData);
    })
    test('debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter((heroe)=>heroe.owner === owner);

        expect(heroes).toEqual(heroesData);
        expect(heroes.length).toBe(2);
    })
    
})
