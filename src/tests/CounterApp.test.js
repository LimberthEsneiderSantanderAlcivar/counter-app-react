import {shallow} from 'enzyme'
import CounterApp from "../CounterApp";


describe('test para el compoennte de CounterApp', () => {
    let wrapper = shallow(<CounterApp />);
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    });

    test('Debe de mostrar <CounterApp /> ', () => {

        expect(wrapper).toMatchSnapshot();
    })
    

    test('debe mostrar el valor por default tomandolo desde el elemento html', () => {
        const wrapper = shallow(
            <CounterApp value={100}/>
            );
        const num = wrapper.find('h2').text();
        expect(num).toBe('100');
    })
    
    test('debe de decrementar el contador cuando se toque el boton "-1"', () => {
        wrapper.find('button').at(0).simulate('click');
        const num = wrapper.find('h2').text();
        expect(num).toBe('4');
    })

    test('debe el contador quedar en 0 cuando se toque el boton "reset"', () => {
        wrapper.find('button').at(1).simulate('click');
        const num = wrapper.find('h2').text();
        expect(num).toBe('0');
    })
    test('debe de incrementar el contador cuando se toque el boton "+1"', () => {
        wrapper.find('button').at(2).simulate('click');
        const num = wrapper.find('h2').text();
        expect(num).toBe('6');
    })
    
    
})
