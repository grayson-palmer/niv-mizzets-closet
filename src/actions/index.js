export const setSearchCards = cards => ({
  type: 'SET_SEARCH_CARDS',
  cards
});

export const setSelectedCard = id => ({
  type: 'SET_SELECTED_CARD',
  id
});

export const loadSelectedCardInfo = card => ({
  type: 'LOAD_SELECTED_CARD',
  card
});

export const clearSelectedCardInfo = () => ({
  type: 'CLEAR_SELECTED_CARD',
  card: {}
});

export const loadingCards = loadingStatus => ({
  type: 'LOADING_CARDS',
  loadingStatus: !loadingStatus
});

export const resetSearchCards = () => ({
  type: 'RESET_SEARCH_CARDS',
  cards: []
});

export const setArtistCards = cards => ({
  type: 'SET_ARTIST_CARDS',
  cards
});

export const addToFavorites = card => ({
  type: 'ADD_TO_FAVORITES',
  card
})

export const removeFromFavorites = card => ({
  type: 'REMOVE_FROM_FAVORITES',
  card
})