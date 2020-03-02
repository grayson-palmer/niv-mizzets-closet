export const addToFavoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, action.card]
    case 'REMOVE_FROM_FAVORITES':
      return state.filter(card => card.tcgplayer_id !== action.card.tcgplayer_id)
    default:
      return state
  }
}