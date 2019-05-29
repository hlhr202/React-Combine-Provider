import * as React from 'react';
import { combineProviders } from '../src';
import { mount } from 'enzyme';
import { createContainer } from 'unstated-next';

describe('compatible with unstated', () => {
    const mockRenderSpy = jest.fn();
    const useCounter1 = (initialState = 1) => {
        const [count, setCount] = React.useState(initialState);
        const decrement = () => setCount(count - 1);
        const increment = () => setCount(count + 1);
        return { count, decrement, increment };
    };
    const Counter1 = createContainer(useCounter1);

    const useCounter2 = (initialState = 2) => {
        const [count, setCount] = React.useState(initialState);
        const decrement = () => setCount(count - 1);
        const increment = () => setCount(count + 1);
        return { count, decrement, increment };
    };
    const Counter2 = createContainer(useCounter2);

    const StateProviders = combineProviders([Counter1.Provider, Counter2.Provider]);

    const CounterDisplay1 = () => {
        const counter1 = Counter1.useContainer();
        mockRenderSpy();
        return (
            <div>
                <div>counter display 1</div>
                <div>counter 1</div>
                <button id="btn-1-1-dec" onClick={counter1.decrement}>
                    -
                </button>
                <span id="span-1-1">{counter1.count}</span>
                <button id="btn-1-1-inc" onClick={counter1.increment}>
                    +
                </button>
                <br />
            </div>
        );
    };

    const CounterDisplay2 = () => {
        const counter1 = Counter1.useContainer();
        const counter2 = Counter2.useContainer();
        return (
            <div>
                <div>counter display 2</div>
                <div>counter 1</div>
                <button id="btn-2-1-dec" onClick={counter1.decrement}>
                    -
                </button>
                <span id="span-2-1">{counter1.count}</span>
                <button id="btn-2-1-inc" onClick={counter1.increment}>
                    +
                </button>
                <div>counter 2</div>
                <button id="btn-2-2-dec" onClick={counter2.decrement}>
                    -
                </button>
                <span id="span-2-2">{counter2.count}</span>
                <button id="btn-2-2-inc" onClick={counter2.increment}>
                    +
                </button>
                <br />
            </div>
        );
    };

    const App = () => (
        <StateProviders>
            <CounterDisplay1 />
            <CounterDisplay2 />
        </StateProviders>
    );

    const wrapper = mount(<App />);
    wrapper.render();

    beforeEach(() => {
        mockRenderSpy.mockReset();
    });

    it('populate unstated providers', () => {
        expect(wrapper.find('#span-1-1').text()).toEqual('1');
        expect(wrapper.find('#span-2-1').text()).toEqual('1');
        expect(wrapper.find('#span-2-2').text()).toEqual('2');
    });

    it('react to unstated change', () => {
        wrapper.find('#btn-1-1-inc').simulate('click');
        expect(wrapper.find('#span-1-1').text()).toEqual('2');
        expect(wrapper.find('#span-2-1').text()).toEqual('2');
        expect(mockRenderSpy.mock.calls.length).toEqual(1);

        wrapper.find('#btn-2-1-dec').simulate('click');
        expect(wrapper.find('#span-1-1').text()).toEqual('1');
        expect(wrapper.find('#span-2-1').text()).toEqual('1');
        expect(mockRenderSpy.mock.calls.length).toEqual(2);
    });

    it('react to minimium consumer change', () => {
        wrapper.find('#btn-2-2-inc').simulate('click');
        expect(wrapper.find('#span-2-2').text()).toEqual('3');
        wrapper.find('#btn-2-2-dec').simulate('click');
        expect(wrapper.find('#span-2-2').text()).toEqual('2');
        expect(mockRenderSpy).not.toHaveBeenCalled();
    });
});
