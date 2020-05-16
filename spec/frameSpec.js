'use strict';

describe('Frame', () => {

  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('total', () => {
    it('calculates a frame score', () => {
      frame.rolls = [3, 5];

      expect(frame.total()).toEqual(8);
    });
  });
});
