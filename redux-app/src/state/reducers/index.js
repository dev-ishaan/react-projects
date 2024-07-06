// It is used when we have more than 1 reducer

import { combineReducers } from 'redux';
import moneyReducer from './moneyReducer';

const reducers = combineReducers({
    money: moneyReducer,
    // if more reducers were there
})

export default reducers