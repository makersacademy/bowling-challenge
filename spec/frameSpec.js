'use strict';

describe('Frame', () => {

  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('getRolls', () => {
    it('returns the frame rolls', () => {
      expect(frame.getRolls()).toEqual(frame.rolls);
    });
  });

  describe('setRolls', () => {
    it('sets the number of pins of the roll', () => {
      frame.setRolls(7);

      expect(frame.rolls).toContain(7);
    });
  });

  describe('total', () => {
    describe('when a frame is not a spare or strike', () => {
      it('calculates a frame score', () => {
        frame.rolls = [3, 5];

        expect(frame.total()).toEqual(8);
      });

      it('calculates a gutter frame score', () => {
        frame.rolls = [0, 0];

        expect(frame.total()).toEqual(0);
      });
    });

    describe('when a frame ends with spare', () => {
      it('calculates a frame score', () => {
        frame.rolls = [3, 7];

        expect(frame.total()).toEqual(10);
      });
    });

    describe('when a frame ends with strike', () => {
      it('calculates a frame score', () => {
        frame.rolls = [10];

        expect(frame.total()).toEqual(10);
      });
    });
  });
});
