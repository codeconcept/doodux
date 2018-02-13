import {createStore} from 'redux';
import doodEventReducer from './reducers/doodEvent';

const store = createStore(doodEventReducer);
export default store;