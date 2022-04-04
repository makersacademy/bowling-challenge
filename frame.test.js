const Frame = require('./frame');

describe('Scoring', () => {
  
  it('should store a score for the frame', () => {
    const frame = new Frame;
    frame.rolled(6);
    expect(frame.score()).toEqual(6);
  })

  it('should store a total score for multiple rolls in a frame', () => {
    const frame = new Frame;
    frame.rolled(6);
    frame.rolled(8);
    expect(frame.score()).toEqual(14);
  })

})

describe('Logging a roll', () => {

  it('should construct an empty array of rolls', () => {
    const frame = new Frame;
    expect(frame.rolls).toEqual([]);
  })

  describe('with no strike or spare', () => {

    it('should return false when trying to move to the next turn with 1 roll', () => {
      const frame = new Frame;
      frame.rolled(5);
      expect(frame.isNextTurn()).toEqual(false);
    })

    it('should return true when trying to move to the next turn with 2 rolls', () => {
      const frame = new Frame;
      frame.rolled(5);
      frame.rolled(3);
      expect(frame.isNextTurn()).toEqual(true);
    })

  })

  describe('with a strike', () => {

    it('should return true when moving to the next', () => {
      const frame = new Frame;
      frame.rolled(10);
      expect(frame.isNextTurn()).toEqual(true);
    })

    it('should return true when checking for a strike', () => {
      const frame = new Frame;
      frame.rolled(10);
      expect(frame.isStrike()).toEqual(true);
    })

  })

  describe('with a spare', () => {

    it('should return false if the frame is not a spare', () => {
      const frame = new Frame;
      frame.rolled(5);
      expect(frame.isSpare()).toEqual(false);
    })

    it('should return true if the frame is a spare', () => {
      const frame = new Frame;
      frame.rolled(3);
      frame.rolled(7);
      expect(frame.isSpare()).toEqual(true);
    })

  })

})