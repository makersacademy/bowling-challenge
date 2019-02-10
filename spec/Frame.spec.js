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

  it('returns the outcome type of strike', () => {
    const frame = new Frame([10])
    expect(frame.type()).toEqual('strike')
  })

  it('returns the outcome type of spare', () => {
    const frame = new Frame([3, 7])
    expect(frame.type()).toEqual('spare')
  })

  it('returns the outcome type of open', () => {
    const frame = new Frame([3, 3])
    expect(frame.type()).toEqual('open')
  })
})
