import {createStore, Store} from 'redux';
import todoApp from './reducers';

const store: Store = createStore(todoApp);
export default store;
