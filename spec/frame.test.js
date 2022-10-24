const Frame = require('../lib/frame.js')

describe('Frame', () => {
  it('returns false when not a spare', () => {
    const frame = new Frame(4,5);
    expect(frame.isSpare()).toEqual(false);
  });

  it('returns false when not a strike', () => {
    const frame = new Frame(4,5);
    expect(frame.isStrike()).toEqual(false);
  });

  it("returns true when strike", () => {
    const frame = new Frame(10,0);
    expect(frame.isStrike()).toEqual(true)
  })

  it("returns true when user gets a spare", () => {
    const frame = new Frame(6,4);
    expect(frame.isSpare()).toEqual(true)
  })
});