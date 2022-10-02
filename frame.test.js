const Frame = require('./frame');

describe('Frame', () => {
  it('returns the correct score', () => {
    frame = new Frame(1);
    frame.setRoll1(7);
    frame.setRoll2(1);
    expect(frame.calculateScore()).toBe(8);
  });

  it('returns the correct score', () => {
    frame = new Frame(1);
    frame.setRoll1(6);
    frame.setRoll2(4);
    frame.setBonus(7);
    expect(frame.calculateScore()).toBe(17);
  });

  it('returns the correct score', () => {
    frame = new Frame(1);
    frame.setRoll1(10);
    frame.setRoll2(4);
    frame.setRoll3(7)
    expect(frame.calculateScore()).toBe(21);
  });
});