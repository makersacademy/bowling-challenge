'use strict';

describe('Frame', () => {

  let frame;

  beforeEach(() => {
    frame = new Frame();
  })

  describe('new', () => {
    it('is expected to be an instance of Frame', () => {
      expect(frame).toBeInstanceOf(Frame);
    });
  });

})