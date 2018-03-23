/* eslint-env jasmine */
const Frame = require('../src/frame');

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  function chainOfRolls(...rolls) {
    rolls.forEach((roll) => {
      frame.roll(roll);
    });
  }

  describe('Score', () => {
    it('starts with a score of 0', () => {
      expect(frame.score()).toEqual(0);
    });

    it('has a score of 7 after one roll of seven', () => {
      frame.roll(7);

      expect(frame.score()).toEqual(7);
    });

    it('has a score of after two rolls of 7 and 2 nine', () => {
      chainOfRolls(7, 2);

      expect(frame.score()).toEqual(9);
    });

    it('still has a score of nine, after three rolls of 7, 2, 4', () => {
      chainOfRolls(7, 2, 4, 4);

      expect(frame.score()).toEqual(9);
    });

    it('has a score of a score of 13 after three rolls of 7, 3, 4 ', () => {
      chainOfRolls(7, 3, 4);

      expect(frame.score()).toEqual(14);
    });

    it('has a score of a score of 13 after three rolls of 7, 3, 4, 8 ', () => {
      chainOfRolls(7, 3, 4, 8);

      expect(frame.score()).toEqual(14);
    });

    it('has a score of a score of 20 after a strike and two rolls of, 7, 3', () => {
      chainOfRolls(10, 7, 3);

      expect(frame.score()).toEqual(20);
    });
  });

  describe('Finished', () => {
    it('has not finished after one roll', () => {
      frame.roll(7);

      expect(frame.isFinished()).toBe(false);
    });

    it('has finished finished after two rolls', () => {
      chainOfRolls(2, 7);

      expect(frame.isFinished()).toBe(true);
    });

    it('has finished finished after a strike', () => {
      frame.roll(10);

      expect(frame.isFinished()).toBe(true);
    });
  });

  describe('view', () => {
    it('should show the first two rolls of a non-spare/strike set', () => {
      chainOfRolls(2, 7);

      expect(frame.view()).toEqual([2, 7]);
    });

    it('should show only one roll after one frame', () => {
      chainOfRolls(5);

      expect(frame.view()).toEqual([5]);
    });

    it('should show only now rolls when unplayed', () => {
      chainOfRolls();

      expect(frame.view()).toEqual([]);
    });

    it('should only show a strike after a roll of ten', () => {
      chainOfRolls(10, 7);

      expect(frame.view()).toEqual([10]);
    });

    it('should only show two rolls after being given 3', () => {
      chainOfRolls(3, 7, 4);

      expect(frame.view()).toEqual([3, 7]);
    });
  });
});
