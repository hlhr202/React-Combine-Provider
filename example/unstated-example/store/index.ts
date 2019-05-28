import { combineProviders } from '../../../dist';
import Counter1 from './counter1';
import Counter2 from './counter2';

const StateProviders = combineProviders([Counter1.Provider, Counter2.Provider]);
export default StateProviders;
