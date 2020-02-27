export const defaultCardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'DEFAULT_CARDS':
      return action.cards
    default:
      return state
  }
}