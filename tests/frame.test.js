const Frame = require('../frame')

describe('Frame', () => {
  const frame = new Frame();

  it('records a roll', () => {
    frame.add_roll(1)
    expect(frame.rolls[0]).toEqual(1);
  })
})