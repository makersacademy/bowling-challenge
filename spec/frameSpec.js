'use strict';

describe('Frame', () => {

  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('#roll', () => {
    it('sets the number of pins of the roll', () => {
      frame.roll(7);

      expect(frame.rolls).toContain(7);
    });

    it('the total score of a frame cannot be more than 10', () => {
      let error = 'Total number of pins cannot be more than 10';
      frame.roll(7);

      expect(function () { frame.roll(5); }).toThrow(new Error(error));
    });

    it('can only store two rolls', () => {
      let error = 'Only two rolls per frame are allowed';
      frame.roll(5);
      frame.roll(2);

      expect(function () { frame.roll(1); }).toThrow(new Error(error));
    });
  });

  describe('#total', () => {
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
