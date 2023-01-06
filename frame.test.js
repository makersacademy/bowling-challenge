const Frame = require('./frame');

describe('Frame class', () => {
  it('returns the scores for 2 rolls', () => {
    const frame = new Frame;

    frame.addRoll(3);
    frame.addRoll(4);

    expect(frame.rolls).toEqual([3, 4]);
  })

  it('returns the scores summed', () => {
    const frame = new Frame;

    frame.addRoll(3);
    frame.addRoll(4);

    expect(frame.score()).toBe(7);
  })

  it('returns true if a strike', () => {
    const frame = new Frame;

    frame.addRoll(10);

    expect(frame.strike()).toBe(true);
  })

  it('returns true if a spare', () => {
    const frame = new Frame;

    frame.addRoll(7);
    frame.addRoll(3);

    expect(frame.spare()).toBe(true);
  })
})