//import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe('preubas en <PrimeraApp/>', () => {
/*     test('Debe mnostrar el mensaje "Hola soy Goku"', () => {
        const saludo = 'Hola soy Goku';

        const {getByText} = render(<PrimeraApp saludo={saludo}/>)
    
        expect(getByText(saludo)).toBeInTheDocument();
    }) */

    test('Debe de mostrar <primeraApp />', () => {
        const saludo = 'Hola soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        
        expect(wrapper).toMatchSnapshot();
    })
    

    test('debe de mostrar el subitutlo enviado por props', () => {
        const saludo = 'Hola soy Goku';
        const subtitulo = 'Soy un subtituloss';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    })
    
    
})
