export const artistCardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ARTIST_CARDS':
      return action.cards
    default:
      return state
  }
}