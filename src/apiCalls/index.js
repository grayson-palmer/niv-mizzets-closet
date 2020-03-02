export const fetchDefaultCards = async () => {
  return await fetch(`https://api.scryfall.com/cards/search?order=released&q=set:thb+-st:token+-is:promo`)
  .then(res => {
    if(!res.ok) {
      throw Error('Failed to retrieve default cards.')
    }
    return res.json()})
}

export const fetchCardsWithSearch = async (searchInput) => {
  return await fetch(`https://api.scryfall.com/cards/search?q=${searchInput}+-st:token+-is:promo`)
  .then(res => {
    if(!res.ok) {
      throw Error('Failed to retrieve search cards.')
    }
    return res.json()})
}

export const fetchCardById = async (tcg_id) => {
  return await fetch(`https://api.scryfall.com/cards/tcgplayer/${tcg_id}`)
  .then(res => {
    if(!res.ok) {
      throw Error('Failed to retrieve cards by ID.')
    }
    return res.json()})
}