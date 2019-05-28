import { combineProviders } from '../../../dist';
import useCounter1Context from './counter1';
import useCounter2Context from './counter2';

const StateProviders = combineProviders([useCounter1Context.Provider, useCounter2Context.Provider]);
export default StateProviders;
