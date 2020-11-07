'use strict';

describe('Bowling', function() {
  let bowling

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('without rolling any strikes or spares', function() {
    it('returns the total score of 10 frames of gutter rolls', function() {
      for (let i = 0; i < 20; i++) {
        bowling.roll(0);
      }
      expect(bowling.totalScore()).toEqual(0)
    });

    it('returns the total score of all rolls', function() {
      for (let i = 0; i < 20; i++) {
        bowling.roll(4);
      }
      expect(bowling.totalScore()).toEqual(80)
    });
  });
});