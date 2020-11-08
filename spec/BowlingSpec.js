'use strict';

describe('Bowling', function() {
  let bowling

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('without rolling any strikes or spares', function() {
    it('returns the total score of 10 frames of gutter rolls', function() {
      manyRolls(0, 20)
      expect(bowling.totalScore()).toEqual(0);
    });

    it('returns the total score of all rolls', function() {
      manyRolls(4, 20)
      expect(bowling.totalScore()).toEqual(80);
    });
  });

  describe('when rolling strikes or spares', function() {
    it('returns the total score with one spare', function() {
      manyRolls(5, 2)
      manyRolls(4, 18)
      expect(bowling.totalScore()).toEqual(86);
    });

    it('returns the total score with two spare', function() {
      manyRolls(5, 2)
      bowling.roll(4)
      bowling.roll(6)
      manyRolls(4, 16)
      expect(bowling.totalScore()).toEqual(92);
    });

    it('returns the total score with one strike', function() {
      bowling.roll(10)
      manyRolls(4, 18)
      expect(bowling.totalScore()).toEqual(90);
    });

    it('returns the total score with two strike', function() {
      manyRolls(10, 2)
      manyRolls(4, 17)
      expect(bowling.totalScore()).toEqual(106);
    });

    it('returns the score of a perfect game', function() {
      manyRolls(10, 12)
      expect(bowling.totalScore()).toEqual(300);
    });
  });

  describe('when rolling strikes or spares in the 10th frame', function() {
    it('returns the total score when bowling a spare in the 10th frame', function() {
      manyRolls(7, 18)
      manyRolls(5, 2)
      bowling.roll(1)
      expect(bowling.totalScore()).toEqual(137);
    });

    it('returns the total score when bowling a strike in the 10th frame', function() {
      manyRolls(7, 18)
      bowling.roll(10)
      manyRolls(1, 2)
      expect(bowling.totalScore()).toEqual(138);
    });
  });

  function manyRolls(pins,rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  }
});