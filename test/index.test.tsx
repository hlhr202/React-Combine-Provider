import * as React from 'react';
import { combineProviders } from '../src';
import { shallow } from 'enzyme';

describe('it', () => {
    it('populate providers in nested tree', () => {
        const Context1 = React.createContext(1);
        const Context2 = React.createContext(2);
        const Providers = combineProviders([[Context1.Provider, { value: 1 }], [Context2.Provider, { value: 2 }]]);

        const Component1 = () => {
            const number = React.useContext(Context1);
            return <div>{number}</div>;
        };

        const Component2 = () => {
            const number = React.useContext(Context2);
            return <div>{number}</div>;
        };

        const App = () => (
            <Providers>
                <Component1 />
                <Component2 />
            </Providers>
        );

        const wrapper = shallow(<App />).dive();
        const outerProviderType = wrapper
            .find('ContextProvider')
            .first()
            .getElement().type as any;
        expect(outerProviderType._context._currentValue).toEqual(2);
        const innerProviderType = wrapper
            .find('ContextProvider')
            .last()
            .getElement().type as any;
        expect(innerProviderType._context._currentValue).toEqual(1);
        expect(
            wrapper
                .find(Component1)
                .dive()
                .text()
        ).toEqual('1');
        expect(
            wrapper
                .find(Component2)
                .dive()
                .text()
        ).toEqual('2');
    });
});
