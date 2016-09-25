/* jshint -W117 */

describe('Frame', function() { 'use strict';

  describe('understanding frame types', function() {

    it('knows when is a spare', function() {
      var frame = new Frame([5,5]);
      expect(frame.isSpare()).toEqual(true);
    })

    it('knows when is a strike', function() {
      var frame = new Frame([10,0]);
      expect(frame.isStrike()).toEqual(true);
    })
  });

  describe('guarding against invalid rolls', function() {

    it('cannot knock down more than max pins', function() {
      var frame = new Frame([11,1]);
      expect(frame.isInvalid()).toEqual(true);
    })

    it('knows a valid roll', function() {
      var frame = new Frame([3,4]);
      expect(frame.isInvalid()).toEqual(false);
    })
  });

  describe('calculating scores', function() {

    it('calculates the total of two rolls', function() {
      var frame = new Frame([3,4]);
      expect(frame.totalFrame()).toEqual(7);
    })

    it('knows when is a spare', function() {
      var frame = new Frame([5,5]);
      expect(frame.isSpare()).toEqual(true);
    })

    it('knows when is a strike', function() {
      var frame = new Frame([10,0]);
      expect(frame.isStrike()).toEqual(true);
    })

    it('calculates a regular score', function() {
      var frame = new Frame([3,4]);
      var nextFrame = new Frame([1,1]);
      expect(frame.totalScore(nextFrame)).toEqual(7);
    })

    it('calculates a spare score', function() {
      var frame = new Frame([5,5]);
      var nextFrame = new Frame([3,4]);
      expect(frame.totalScore(nextFrame)).toEqual(13);
    })

    it('calculates a strike score', function() {
      var frame = new Frame([10,0]);
      var nextFrame = new Frame([3,4]);
      expect(frame.totalScore(nextFrame)).toEqual(17);
    })

    it('calculates a double strike score', function() {
      var frame = new Frame([10,0]);
      var nextFrame = new Frame([10,0]);
      var secondNextFrame = new Frame([3,4]);
      expect(frame.totalScore(nextFrame, secondNextFrame)).toEqual(23);
    })
  });
});
