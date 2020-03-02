export const searchCardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH_CARDS':
      return action.cards
    case 'RESET_SEARCH_CARDS':
      return []
    default:
      return state
  }
}