const Frame = require('./frame');

describe('Frame', () => {
  it('returns the correct score', () => {
    frame = new Frame(1);
    frame.roll1 = 7;
    frame.roll2 = 1;
    frame.calculateScore();
    expect(frame.score).toBe(8);
  });

  it('returns the correct score', () => {
    frame = new Frame(1);
    frame.roll1 = 6;
    frame.roll2 = 4;
    frame.bonus = 7;
    frame.calculateScore();
    expect(frame.score).toBe(17);
  });

  it('returns the correct score', () => {
    frame = new Frame(1);
    frame.roll1 = 10;
    frame.roll2 = 4;
    frame.roll3 = 7;
    frame.calculateScore();
    expect(frame.score).toBe(21);
  });
});