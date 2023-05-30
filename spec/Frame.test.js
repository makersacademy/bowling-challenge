const {Frame} = require('../lib/index');

let frame;

beforeEach(() => {
  frame = new Frame();
});

describe('Frame class', () => {
  it('constructs', () => {
    expect(frame).toBeTruthy();
    expect(frame).toHaveProperty('rolls', []);
  });

  describe('getRolls method', () => {
    it('returns this.rolls', () => {
      expect(frame.getRolls()).toEqual([]);
    });
  });

  describe('addRoll method', () => {
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

  describe('isFrameOver method', () => {
    it('returns true if frame has two regular rolls', () => {
      frame.addRoll(0);
      frame.addRoll(0);
      expect(frame.isFrameOver()).toBe(true);
    });

    it('returns false if frame has one regular roll', () => {
      frame.addRoll(9);
      expect(frame.isFrameOver()).toBe(false);
    });

    it('returns true if roll is a strike', () => {
      frame.addRoll(10);
      expect(frame.isFrameOver()).toBe(true);
    });
  });

  describe('sumFrame method', () => {
    it('sums the rolls in a frame', () => {
      frame.addRoll(2);
      frame.addRoll(2);
      expect(frame.sumFrame()).toBe(4);
    });
  });
});
