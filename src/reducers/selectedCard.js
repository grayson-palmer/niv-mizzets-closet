export const selectedCardReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CARD':
      return action.id
    default:
      return state
  }
}