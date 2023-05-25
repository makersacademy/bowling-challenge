const Frame = require('../frame');

describe('Frame', () => {
  describe('when it is initialised with two zeros', () => {
    it('has those scores', () => {
      const frame = new Frame(0, 0);
      expect(frame.getScores()).toEqual([0, 0]);
    })

    it('has a base score of 0', () => {
      const frame = new Frame(0, 0);
      expect(frame.getBaseScore()).toEqual(0);
    })

    it('is not a strike', () => {
      const frame = new Frame(0, 0);
      expect(frame.isStrike()).toEqual(false);
    })

    it('is not a spare', () => {
      const frame = new Frame(0, 0);
      expect(frame.isSpare()).toEqual(false);
    })
  })

  describe('when initialised with two numbers that add up to 9', () => {
    it('has those scores', () => {
      const frame = new Frame(4, 5);
      expect(frame.getScores()).toEqual([4, 5]);
    })

    it('is not a strike', () => {
      const frame = new Frame(4, 5);
      expect(frame.isStrike()).toEqual(false);
    })

    it('is not a spare', () => {
      const frame = new Frame(4, 5);
      expect(frame.isSpare()).toEqual(false);
    })

    it('has a base score of 9', () => {
      const frame = new Frame(4, 5);
      expect(frame.getBaseScore()).toEqual(9);
    })
  })

  describe('when initialised with two numbers that add up to 10', () => {
    it('is a spare', () => {
      const frame = new Frame(2, 8);
      expect(frame.isSpare()).toEqual(true);
    })
  })

  describe('when initialised with another two numbers that add up to 10', () => {
    it('is a spare', () => {
      const frame = new Frame(9, 1);
      expect(frame.isSpare()).toEqual(true);
    })
  })

  describe('when initialised with 10', () => {
    it('is a strike', () => {
      const frame = new Frame(10);
      expect(frame.isStrike()).toEqual(true);
    })

    it('is not a spare', () => {
      const frame = new Frame(10);
      expect(frame.isSpare()).toEqual(false);
    })

    it('has a base score of 10', () => {
      const frame = new Frame(10);
      expect(frame.getBaseScore()).toEqual(10);
    })
  })
})