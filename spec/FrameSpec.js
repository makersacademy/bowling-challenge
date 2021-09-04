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

    it('is expected to have an Array attribute', () => {
      expect(frame).toEqual(jasmine.objectContaining({_bowls: []}))
    })
  });

  describe('add bowl', () => {
    it('is expected to add the bowl to the _bowls array', () => {
      frame.addBowl(5)
      expect(frame._bowls).toContain(5)
    })
  })

})