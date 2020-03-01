export const selectedCardInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_SELECTED_CARD':
      return action.card
    case 'CLEAR_SELECTED_CARD':
      return state
    default:
      return state
  }
}