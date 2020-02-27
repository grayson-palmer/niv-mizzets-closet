export const fetchDefaultCards = async () => {
  return await fetch(`https://api.scryfall.com/cards/search?order=released&q=set:thb`)
  .then(res => {
    if(!res.ok) {
      throw Error('Failed to retrieve default cards.')
    }
    return res.json()})
}

export const fetchCardsWithSearch = async (searchInput) => {
  return await fetch(`https://api.scryfall.com/cards/search?q=${searchInput}`)
  .then(res => {
    if(!res.ok) {
      throw Error('Failed to retrieve cards.')
    }
    return res.json()})
}