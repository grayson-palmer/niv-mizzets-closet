export const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case 'LOADING_CARDS':
      return action.loadingStatus;
    default:
      return state;
  }
}