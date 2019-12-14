const Frame = require('../../src/frame');

describe('Frame', () => {
  const testFrame = new Frame();
  const testFrame2 = new Frame();

  beforeEach(() => {
    testFrame.setRollOne(5);
    testFrame.setRollTwo(3);

    testFrame2.setRollOne(8);
    testFrame2.setRollTwo(1);
  });

  describe('setRollOne()', () => {
    it('keeps track of the first roll of a frame', () => {
      expect(testFrame.getRollOne()).toBe(5);
      expect(testFrame2.getRollOne()).toBe(8);
    });
  });

  describe('setRollTwo()', () => {
    it('keeps track of the second roll of a frame', () => {
      expect(testFrame.getRollTwo()).toBe(3);
      expect(testFrame2.getRollTwo()).toBe(1);
    });
  });

  describe('getFrameScore()', () => {
    it('tallies two rolls of 4 and 5 as a score of 9', () => {
      expect(testFrame.getFrameScore()).toBe(8);
    });
  });
});
