import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import rules from './rules';
import messages from './messages';
import single from './single_tourn';

const rootReducer = combineReducers({ rules, messages, single, routing: routerReducer });

export default rootReducer;
