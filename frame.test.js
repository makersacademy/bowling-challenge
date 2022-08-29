const Frame = require('./frame')

describe("Is not a strike or spare", () => {
  it('returns false when user does not get a spare', () => {
    const frame = new Frame(6,3)
    expect(frame.checkSpare()).toEqual(false)
  })
  it('returns false when user does not get a strike', () => {
    const frame = new Frame(6,3)
    expect(frame.checkStrike()).toEqual(false)
  })
})
describe("Is a strike or spare", () => {
  it("returns true when user gets strike", () => {
    const frame = new Frame(10,0)
    expect(frame.checkStrike()).toEqual(true)
  })
  it("returns true when user gets a spare", () => {
    const frame = new Frame(6,4)
    expect(frame.checkSpare()).toEqual(true)
  })
})