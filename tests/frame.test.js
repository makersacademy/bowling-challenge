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
})