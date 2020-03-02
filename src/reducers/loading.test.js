import { loadingReducer } from './loading.js';

describe('loadingReducer', () => {

  it ('should have an initial state of an empty array', () => {
    const expected = true;
    const result = loadingReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it ('should return the correct state if the action type is LOADING_CARDS', () => {
    const mockAction = {
      type: 'LOADING_CARDS',
      loadingStatus: true
    }
    const mockState = false;
    const result = loadingReducer(mockState, mockAction);

    expect(result).toEqual(true)
  })
})