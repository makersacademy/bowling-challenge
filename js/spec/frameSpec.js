'use strict';

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame
  })

  describe('score', () => {
    it('calculates the score after 1 roll', () => {
      frame.addRoll(5)
      expect(frame.score()).toBe(5)
    });
  });

  describe('isOver', () => {
    it('knows when it is over', () => {
      frame.addRoll(5)
      frame.addRoll(5)
      expect(frame.isOver()).toBe(true)
    });

    it('knows when it is not over', () => {
      frame.addRoll(5)
      expect(frame.isOver()).toBe(false)
    });
  });
});
