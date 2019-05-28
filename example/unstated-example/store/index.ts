import { combineProviders } from '../../../dist';
import Counter1 from './counter1';
import Counter2 from './counter2';

const StateProviders = combineProviders([
  [Counter1.Provider, { initialState: 5 }],
  Counter2.Provider,
]);
export default StateProviders;
