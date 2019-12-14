const rollProtos = require('../../lib/javascript/roll.js');

const { Roll } = rollProtos;
const { RollError } = rollProtos;

describe('Roll', () => {
  describe('constructor', () => {
    it('should accept a score and number of additional rolls', () => {
      const roll = new Roll(3, 0);

      expect(roll.score()).toEqual(3);
    });

    it('should raise an error if score is less than 0', () => {
      expect(() => new Roll(-1, 0))
        .toThrowError(RollError, 'Score cannot be less than 0');
    });

    it('should raise an error if the score is highr than 10', () => {
      expect(() => new Roll(11, 1))
        .toThrowError(RollError, 'Score cannot be greater than 10');
    });

    it('should raise an error for anything other than 0,1 or 2 additional rolls', () => {
      expect(() => new Roll(5, 3))
        .toThrowError(RollError, 'Only 0, 1 or 2 additional rolls allowed');
      expect(() => new Roll(5, -1))
        .toThrowError(RollError, 'Only 0, 1 or 2 additional rolls allowed');
    });

    it('should only be possible to get 2 additional rolls with a score of 10', () => {
      expect(() => new Roll(9, 2))
        .toThrowError(RollError, '2 additional rolls is only possible with a strike');
      expect(() => new Roll(10, 2)).not.toThrowError();
    });
  });

  describe('.addScore', () => {
    it('should do nothing if no additional rolls were specified', () => {
      const roll = new Roll(7, 0);
      expect(roll.addScore(8)).toEqual(7);
      expect(roll.score()).toEqual(7);
    });

    it('should add one more roll if one additional roll', () => {
      const roll = new Roll(7, 1);
      expect(roll.addScore(8)).toEqual(15);
      expect(roll.score()).toEqual(15);

      expect(roll.addScore(5)).toEqual(15);
      expect(roll.score()).toEqual(15);
    });

    it('should add two more rolls if two additional roll', () => {
      const roll = new Roll(10, 2);
      expect(roll.addScore(8)).toEqual(18);
      expect(roll.score()).toEqual(18);

      expect(roll.addScore(2)).toEqual(20);
      expect(roll.score()).toEqual(20);

      expect(roll.addScore(10)).toEqual(20);
      expect(roll.score()).toEqual(20);
    });

    describe('error testing', () => {
      let roll;

      beforeEach(() => { roll = new Roll(5, 0); });

      it('should throw an error if score is less than 0', () => {
        expect(() => roll.addScore(-1))
          .toThrowError(RollError, 'Score cannot be less than 0');
      });

      it('should throw an error if score is greater than 10', () => {
        expect(() => roll.addScore(11))
          .toThrowError(RollError, 'Score cannot be greater than 10');
      });
    });
  });
});
