const Frame = require('./frame');

describe('Frame', () => {
  it('returns the sum', () => {
    const frame = new Frame(2,4);
    result = frame.getSum();
    expect(result).toBe(6);
  });

  it('returns true if the frame is a spare', () => {
    const frame = new Frame(2,8);
    result = frame.isSpare();
    expect(result).toBe(true);
  });

  it('returns false if the frame is not a spare', () => {
    const frame = new Frame(1,8);
    result = frame.isSpare();
    expect(result).toBe(false);
  });

  it('returns true if the frame is a strike', () => {
    const frame = new Frame(10,0);
    result = frame.isStrike();
    expect(result).toBe(true);
  });

  it('returns false if the frame is not a spare', () => {
    const frame = new Frame(3,2);
    result = frame.isStrike();
    expect(result).toBe(false);
  });
});