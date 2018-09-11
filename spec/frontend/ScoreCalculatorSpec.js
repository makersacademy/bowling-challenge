"use strict";

describe('ScoreCalculator', function() {
  //var RollDecider = require('../../public/js/RollDecider');
  var scoreCalculator;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
  })

  it('Instantiates with a score of zero', function() {
    expect(scoreCalculator.calculate(0, { frame: 1, roll: 2})).toEqual({ total: 0, scoresArray: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] });
  });

  it('Instantiates current turn: frame = 1, roll = 1', function() {
    expect(scoreCalculator._currentTurn).toEqual({ frame: 1, roll: 1 });
  })

  describe('.calculate', function() {
    it('Keeps a running total of score', function() {
      scoreCalculator.calculate(5, { frame: 1, roll: 2 });
      scoreCalculator.calculate(4, { frame: 2, roll: 1 });
      expect(scoreCalculator.calculate(5, { frame: 2, roll: 2 })).toEqual({ total: 14, scoresArray: [ 9, 5, 0, 0, 0, 0, 0, 0, 0, 0 ] });
    })

    it('Updates _currentTurn', function() {
      scoreCalculator.calculate(5, { frame: 1, roll: 2 });
      scoreCalculator.calculate(5, { frame: 2, roll: 1 });
      expect(scoreCalculator._currentTurn).toEqual({ frame: 2, roll: 1 });
    });

    it('Adds correct score after a strike', function() {
      scoreCalculator.calculate(10, { frame: 2, roll: 1 });
      scoreCalculator.calculate(5, { frame: 2, roll: 2 });
      expect(scoreCalculator.calculate(4, { frame: 3, roll: 1 })).toEqual({ total: 28, scoresArray: [ 19, 9, 0, 0, 0, 0, 0, 0, 0, 0 ] });
    })

    it('Adds correct score after sequential strikes', function() {
      scoreCalculator.calculate(10, { frame: 2, roll: 1 });
      scoreCalculator.calculate(10, { frame: 3, roll: 1 });
      expect(scoreCalculator.calculate(10, { frame: 2, roll: 1 })).toEqual({ total: 50, scoresArray: [ 20, 20, 10, 0, 0, 0, 0, 0, 0, 0 ] });
    });

    it('Adds correct score after a spare', function() {
      scoreCalculator.calculate(7, { frame: 1, roll: 2 });
      scoreCalculator.calculate(3, { frame: 2, roll: 1 });
      scoreCalculator.calculate(4, { frame: 2, roll: 2 });
      expect(scoreCalculator.calculate(4, { frame: 3, roll: 1 })).toEqual({ total: 22, scoresArray: [ 14, 8, 0, 0, 0, 0, 0, 0, 0, 0 ] });
    });
  });
});
