"use strict";

describe('Frame', function() {
  let frame;
  
  beforeEach(function() {
    frame = new Frame();
  });
  describe('update', function() {
    it('updates rollOne after one roll', function() {
      frame.update(6);
      expect(frame._rollOne).toEqual(6);
    });
  })
});