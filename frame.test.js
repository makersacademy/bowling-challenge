const Frame = require('./frame');

describe('Frame', () => {

  it('adds gutter rolls to frame and totals 0', () => {
    const frame = new Frame(0, 0);
    expect(frame.accessFrame()).toEqual([0,0]);
    expect(frame.frameTotal()).toBe(0);
  });

  it('adds score rolls to frame and totals less than 10', () => {
    const frame = new Frame(2, 7);
    expect(frame.accessFrame()).toEqual([2,7]);
    expect(frame.frameTotal()).toBe(9);
  });

  it('adds score rolls to frame and that give a spare', () => {
    const frame = new Frame(2, 8);
    expect(frame.accessFrame()).toEqual([2,8]);
    expect(frame.frameTotal()).toBe(10);
    expect(frame.checkForSpare()).toBe(true);
  });

  it('is a strike and checks for strike', () => {
    const frame = new Frame(10, 0);
    expect(frame.accessFrame()).toEqual([10,0]);
    expect(frame.frameTotal()).toBe(10);
    expect(frame.checkForStrike()).toBe(true);
  });

});