import { combineReducers } from 'redux';
import { searchCardsReducer } from './searchCards.js';
import { loadingReducer } from './loading.js';
import { artistCardsReducer } from './artistCards.js';
import { selectedCardReducer } from './selectedCard.js';
import { selectedCardInfoReducer } from './selectedCardInfo.js';

const rootReducer = combineReducers({
  searchCards: searchCardsReducer,
  loadingStatus: loadingReducer,
  artistCards: artistCardsReducer,
  selectedCard: selectedCardReducer,
  selectedCardInfo: selectedCardInfoReducer
})

export default rootReducer;