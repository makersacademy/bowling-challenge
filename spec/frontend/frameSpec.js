const Frame = require('../../src/frame');

describe('Frame', () => {
  let testFrame = new Frame();
  let testFrame2 = new Frame();

  beforeEach(() => {
    testFrame = new Frame();
    testFrame.setRollOne(5);
    testFrame.setRollTwo(3);

    testFrame2 = new Frame();
    testFrame2.setRollOne(6);
    testFrame2.setRollTwo(1);
  });

  describe('setRollOne()', () => {
    it('keeps track of the first roll of a frame', () => {
      expect(testFrame.getRollOne()).toBe(5);
      expect(testFrame2.getRollOne()).toBe(6);
    });
  });

  describe('setRollTwo()', () => {
    it('keeps track of the second roll of a frame', () => {
      expect(testFrame.getRollTwo()).toBe(3);
      expect(testFrame2.getRollTwo()).toBe(1);
    });
  });

  describe('getScore()', () => {
    it('tallies two rolls of 4 and 5 as a score of 9', () => {
      expect(testFrame.getScore()).toBe(8);
    });

    it('tallies two rolls of 6 and 1 as a score of 7', () => {
      expect(testFrame2.getScore()).toBe(7);
    });

    describe('any bonus point', () => {
      it('is added to the total frame score', () => {
        testFrame.awardBonus(5);

        expect(testFrame.getScore()).toEqual(13);
      });
    });
  });

  describe('isA()', () => {
    describe('strike', () => {
      it('allows a frame to be awarded bonus points after the fact for a number of turns', () => {
        const strikeFrame = new Frame();
        const spareFrame = new Frame();

        strikeFrame.isA('strike');
        spareFrame.isA('spare');

        expect(strikeFrame.hasBonusTurnsLeft()).toBe(true);
        expect(spareFrame.hasBonusTurnsLeft()).toBe(true);
      });
    });
  });

  describe('dropBonusTurn()', () => {
    const strikeFrame = new Frame();
    const spareFrame = new Frame();

    strikeFrame.isA('strike');
    spareFrame.isA('spare');

    it('uses up the one bonus turn given to a spare', () => {
      spareFrame.dropBonusTurn();

      expect(spareFrame.hasBonusTurnsLeft()).toBe(false);
    });

    it('uses up one of two bonus turns given to a strike', () => {
      strikeFrame.dropBonusTurn();

      expect(strikeFrame.hasBonusTurnsLeft()).toBe(true);
    });
  });
});
