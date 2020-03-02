import { selectedCardReducer } from './selectedCard.js';

describe('selectedCardReducer', () => {

  it ('should have an initial state of an empty array', () => {
    const expected = 0;
    const result = selectedCardReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it ('should return the correct state if the action type is SET_SELECTED_CARDS', () => {
    const mockAction = {
      type: 'SET_SELECTED_CARD',
      id: 123456
    }
    const mockState = 123;
    const result = selectedCardReducer(mockState, mockAction);

    expect(result).toEqual(123456)
  })
})