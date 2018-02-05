'use strict';

describe('Frame', function(){
  var frame


  beforeEach(function(){
    frame = new Frame();
  });

  describe('roll', function() {

    it('stores the number of pins knocked down', function() {
      frame.roll(7);
      expect(frame.rolls).toContain(7);
    });
  });

  describe('score', function() {

    it('returns the score for the frame', function() {
      frame.roll(7);
      frame.roll(2);
      expect(frame.score()).toEqual(9);
    });
  });

  describe('isAStrike', function() {

    it('knows if frame is a strike', function() {
      frame.roll(10);
      expect(frame.isAStrike()).toBe(true)
    });
  });

  describe('isASpare', function() {

    it('knows if frame is a spare', function() {
      frame.roll(7);
      frame.roll(3);
      expect(frame.isASpare()).toBe(true)
    });
  });

  describe('isValid', function() {

    it('checks if the first roll is valid', function() {
      frame.roll(12)
      expect(frame.isValid()).toBe(false)
    });

    it('checks if the sum of both rolls are valid', function() {
      frame.roll(5)
      frame.roll(7)
      expect(frame.isValid()).toBe(false)
    });
  });

});
