const Frame = require('../src/Frame')

describe('Frame', () => {
  it('stores the rolls', () => {
    const frame = new Frame([5, 5])
    expect(frame._rolls).toEqual([5, 5])
  })
})
