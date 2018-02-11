const Frame = require('../src/Frame');

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    const rules = jasmine.createSpyObj('rules', {
      maxFrameLength: 2,
      isSpare: false,
      isStrike: false,
    });
    frame = new Frame(rules);
  });

  describe('#bowl', () => {
    describe('guard conditions for rules', () => {
      it('cannot record more bowls than the max frame length', () => {
        const maxRolls = frame.rules.maxFrameLength();
        for (let i = 0; i < maxRolls; i += 1) {
          frame.bowl(0);
        }

        expect(() => { frame.bowl(0); }).toThrowError(`Cannot have more than ${maxRolls} rolls`);
      });
    });

    describe('basic scoring', () => {
      beforeEach(() => {
        frame.bowl(5);
        frame.bowl(4);
      });

      it('records two rolls', () => {
        expect(frame.rolls).toEqual({ 1: 5, 2: 4 });
      });

      it('adds the rolls together', () => {
        expect(frame.baseScore).toEqual(9);
      });

      it('knows how many bowl attempts have been made', () => {
        expect(frame.bowlAttempts).toEqual(2);
      });
    });

    describe('scoring a spare', () => {
      it('knows if the frame had a spare', () => {
        frame.bowl(5);
        frame.bowl(5);

        expect(frame.isASpareFrame).toBeBoolean();
      });
    });

    describe('scoring a strike', () => {
      beforeEach(() => {
        frame.bowl(10);
      });

      it('knows if the frame had a strike', () => {
        expect(frame.isAStrikeFrame).toBeBoolean();
      });

      it('does not let you roll again after a strike', () => {
        frame.isAStrikeFrame = true;

        expect(() => { frame.bowl(0); }).toThrowError('Cannot have second go after a strike');
      });
    });
  });
});
