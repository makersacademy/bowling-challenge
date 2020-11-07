'use strict';

describe('Bowling', function() {
  var bowling

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('without rolling any strikes or spares', function() {
    it('returns the total score of 10 frames of gutter rolls', function() {
      for (var i = 0; i < 20; i++) {
        bowling.roll(0);
      }
      expect(bowling.totalScore()).toEqual(0)
    });
  });
});