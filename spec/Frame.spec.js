const Frame = require('../src/Frame')

describe('Frame', () => {
  it('stores the rolls', () => {
    const frame = new Frame([5, 5])
    expect(frame._rolls).toEqual([5, 5])
  })

  it('returns the outcome', () => {
    const frame = new Frame([5, 5])
    expect(frame.outcome()).toEqual([5, 5])
  })
})
