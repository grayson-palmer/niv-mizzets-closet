import { combineReducers } from 'redux';
import { searchCardsReducer } from './searchCards.js';
import { defaultCardsReducer } from './defaultCards.js';

const rootReducer = combineReducers({
  defaultCards: defaultCardsReducer,
  searchCards: searchCardsReducer,
})

export default rootReducer;