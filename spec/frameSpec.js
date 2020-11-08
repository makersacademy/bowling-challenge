'use strict';

describe('Frame', () => {

  let frame;

  beforeEach( () => {
    frame = new Frame;
  });

  describe('bowl', () => {
    it('adds score to first bowl on first go', () => {
      frame.bowl(5);
      expect(frame.firstBowl()).toEqual(5);
    });

    it('adds score to second bowl on second go', () => {
      frame.bowl(5);
      frame.bowl(3);
      expect(frame.secondBowl()).toEqual(3);
    });
  });

  describe('complete', () => {
    it('starts off incomplete', () => {
      expect(frame.isComplete()).toBe(false);
    });

    it('true when 2 bowls have happened', () =>  {
      frame.bowl(5);
      frame.bowl(2);
      expect(frame.isComplete()).toBe(true);

    });
  });

});