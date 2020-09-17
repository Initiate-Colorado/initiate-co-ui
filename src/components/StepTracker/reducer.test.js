import '@testing-library/jest-dom'
import state from './reducer'
import { INCREMENT, DECREMENT, RESET, FORCE } from './reducer'

describe('step tracker reducer', () => {

  it('should return an initial state for initiativeStepReducer to be 0', () => {
    const expected = 0
    const result = state(undefined, {})
    expect(result).toEqual(expected)
  })

//   it('should allow a user to increase steps', () => {
//     const expected = 1
//     const result = state(undefined, {
//       type: INCREMENT
//     })
//     expect(result).toEqual(expected)
//   })
})