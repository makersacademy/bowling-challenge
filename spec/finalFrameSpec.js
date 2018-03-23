/* eslint-env jasmine */
const FinalFrame = require('../src/finalFrame');



describe('StrikeRound', () => {
  let finalFrame;

  beforeEach(() => {
    finalFrame = new FinalFrame();
  });

  function chainOfRolls(...rolls) {
    rolls.forEach((roll) => {
      finalFrame.roll(roll);
    });
  }

  describe('view final', () => {
    it('should show first two rolls of a non-spare/strike set', () => {
      chainOfRolls(3, 2);

      expect(finalFrame.view()).toEqual([3, 2]);
    });

    it('should show one roll after one frame', () => {
      chainOfRolls(5);

      expect(finalFrame.view()).toEqual([5]);
    });

    it('should show no rolls when unplayed', () => {
      chainOfRolls();

      expect(finalFrame.view()).toEqual([]);
    });

    it('should only show two rolls after being given 3 non strike/spares', () => {
      chainOfRolls(9, 0, 3);

      expect(finalFrame.view()).toEqual([9, 0]);
    });

    it('should three rolls after being given a strike after a roll of ten', () => {
      chainOfRolls(10, 7, 3);

      expect(finalFrame.view()).toEqual([10, 7, 3]);
    });

    it('should show three rolls after being given a spare', () => {
      chainOfRolls(3, 7, 4);

      expect(finalFrame.view()).toEqual([3, 7, 4]);
    });
  });
});
