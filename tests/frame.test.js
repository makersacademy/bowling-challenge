const Frame = require('../lib/frame.cjs');

describe('Frame class', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('the frame is completed', () => {
    frame.logRoll(6);
    frame.logRoll(3);
    expect(frame.frameComplete()).toBe(true);
  });

  it('frame is not completed', () => {
    frame.logRoll(6);
    expect(frame.frameComplete()).toBe(false);
  });

  it('frame is not completed', () => {
    frame.logRoll(10);
    expect(frame.frameComplete()).toBe(true);
  });

  it('sums a frame', () => {
    frame.logRoll(3);
    frame.logRoll(6);
    expect(frame.sumFrame()).toBe(9);
  });

  it('is an open frame', () => {
    frame.logRoll(3);
    frame.logRoll(6);
    expect(frame.openFrame()).toBe(true);
  });

  it('shows game is a spare game', () => {
    frame.logRoll(3);
    frame.logRoll(7);
    expect(frame.spareFrame()).toBe(true);
  });

  it('shows game is a strike game', () => {
    frame.logRoll(10);
    expect(frame.strikeFrame()).toBe(true);
  });

  it('shows game is not a strike game after a spare', () => {
    frame.logRoll(3);
    frame.logRoll(7);
    expect(frame.strikeFrame()).toBe(false);
  });

  it('shows rolls with a spare on second roll', () => {
    frame.logRoll(0);
    frame.logRoll(10);
    expect(frame.allRolls()).toEqual(expect.arrayContaining([0, 10]));
    expect(frame.allRolls()).toHaveLength(2);
  });

  it('does not allow rolls less than 0', () => {
    expect(() => {
      frame.logRoll(-1);
    }).toThrow('Invalid pins downed');
  });

  it('does not allow rolls greater than 10', () => {
    expect(() => {
      frame.logRoll(11);
    }).toThrow('Invalid pins downed');
  });


  it('returns a formatted string for a spare ', () => {
    frame.logRoll(3);
    frame.logRoll(7);
    expect(frame.formatFrame()).toBe('3 |/ ');
  });

  it('returns a formatted string for a strike ', () => {
    frame.logRoll(10);
    expect(frame.formatFrame()).toBe('X |  ');
  });

  it('returns a formatted string for an open frame ', () => {
    frame.logRoll(1);
    frame.logRoll(2);
    expect(frame.formatFrame()).toBe('1 |2 ');
  });

  it('returns a formatted string for one roll ', () => {
    frame.logRoll(1);
    expect(frame.formatFrame()).toBe('1 |  ');
  });
});
