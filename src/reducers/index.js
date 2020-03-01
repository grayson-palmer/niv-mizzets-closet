import { combineReducers } from 'redux';
import { searchCardsReducer } from './searchCards.js';
import { defaultCardsReducer } from './defaultCards.js';
import { loadingReducer } from './loading.js';

const rootReducer = combineReducers({
  defaultCards: defaultCardsReducer,
  searchCards: searchCardsReducer,
  loadingStatus: loadingReducer 
})

export default rootReducer;