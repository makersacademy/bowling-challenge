const Frame = require('../frame')

describe('Frame', () => {
  const frame = new Frame();

  it('records a roll', () => {
    frame.addRoll(1)
    expect(frame.rolls[0]).toEqual(1);
  })

  it('returns the frame score', () => {
    expect(frame.totalScore()).toEqual(1);
  })

  it('adds bonuses to the frame score', () => {
    frame.bonus = 1;
    expect(frame.totalScore()).toEqual(2);
  })

  it('sets frame as spare', () => {
    frame.addRoll(9);
    expect(frame.isSpare()).toEqual(true);
  })

  it('sets frame as strike', () => {
    const strikeFrame = new Frame();
    strikeFrame.addRoll(10);
    expect(strikeFrame.isStrike()).toEqual(true);
  })
})