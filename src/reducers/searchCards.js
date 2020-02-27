export const searchCardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NAMED_SEARCH':
      return action.searchCards
    default:
      return state
  }
}