export const getDefaultCards = cards => ({
  type: 'DEFAULT_CARDS',
  cards
});

export const setSearchCards = cards => ({
  type: 'SET_SEARCH_CARDS',
  cards
});

export const loadingCards = loadingStatus => ({
  type: 'LOADING_CARDS',
  loadingStatus: !loadingStatus
});