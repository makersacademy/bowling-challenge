const {Frame} = require('../lib/index');

let frame;

beforeEach(() => {
  frame = new Frame();
})

describe('Frame class', () => {
  it('constructs', () => {
    expect(frame).toBeTruthy();
    expect(frame).toHaveProperty('rolls', []);
  });

  describe('getRolls', () => {
    it('returns this.rolls', () => {
      expect(frame.getRolls()).toEqual([]);
    });
  });

  describe('getRolls', () => {
    it('adds a roll result to this.rolls', () => {
      frame.addRoll(2);
      expect(frame.getRolls()).toEqual([2]);
    });

    it('adds two roll results to this.rolls', () => {
      frame.addRoll(2);
      frame.addRoll(0);
      expect(frame.getRolls()).toEqual([2, 0]);
    });
  });
});
