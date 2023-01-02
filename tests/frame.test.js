const Frame = require('../lib/frame');

describe('Frame', () => {
  it('returns the value of the first roll', () => {
    expect(new Frame(1, 4).getFirst()).toBe(1);
  });
  it('returns the value of the second roll', () => {
    expect(new Frame(1, 4).getSecond()).toBe(4);
  });
  it('adds the values of the frame', () => {
    expect(new Frame(0, 0).getTotal()).toBe(0);
    expect(new Frame(0, 10).getTotal()).toBe(10);
    expect(new Frame(10, 0).getTotal()).toBe(10);
    expect(new Frame(1, 2).getTotal()).toBe(3);
    expect(new Frame(5, 5).getTotal()).toBe(10);
  });
  it('reports if there is a strike', () => {
    expect(new Frame(0, 5).isStrike()).toBe(false);
    expect(new Frame(5, 5).isStrike()).toBe(false);
    expect(new Frame(10, 0).isStrike()).toBe(true);
  });
  it('reports if there is a spare', () => {
    expect(new Frame(0, 5).isSpare()).toBe(false);
    expect(new Frame(5, 5).isSpare()).toBe(true);
    expect(new Frame(10, 0).isSpare()).toBe(false);
  });
});