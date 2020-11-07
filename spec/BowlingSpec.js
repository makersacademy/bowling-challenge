'use strict';

describe('Bowling', function() {
  let bowling

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('without rolling any strikes or spares', function() {
    it('returns the total score of 10 frames of gutter rolls', function() {
      manyRolls(0, 20)
      expect(bowling.totalScore()).toEqual(0)
    });

    it('returns the total score of all rolls', function() {
      manyRolls(4, 20)
      expect(bowling.totalScore()).toEqual(80)
    });
  });

  describe('when rolling strikes or spares', function() {
    it('returns the total score with one spare', function() {
      manyRolls(5, 2)
      manyRolls(4, 18)
      expect(bowling.totalScore()).toEqual(86)
    });

    it('returns the total score with one spare', function() {
      manyRolls(5, 2)
      bowling.roll(4)
      bowling.roll(6)
      manyRolls(4, 16)
      expect(bowling.totalScore()).toEqual(92)
    });
  });

  function manyRolls(pins,rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  }
});

