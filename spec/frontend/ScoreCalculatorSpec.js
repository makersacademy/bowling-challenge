"use strict";

describe('ScoreCalculator', function() {
  //var RollDecider = require('../../public/js/RollDecider');
  var scoreCalculator;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
  })

  it('Instantiates with a score of zero', function() {
    expect(scoreCalculator.increment(0, { frame: 1, roll: 2})).toEqual(0);
  });

  it('Instantiates current turn: frame = 1, roll = 1', function() {
    expect(scoreCalculator._currentTurn).toEqual({ frame: 1, roll: 1 });
  })

  describe('.increment', function() {
    it('Keeps a running total of score', function() {
      scoreCalculator.increment(5, { frame: 1, roll: 2 });
      scoreCalculator.increment(4, { frame: 2, roll: 1 });
      expect(scoreCalculator.increment(5, { frame: 2, roll: 2 })).toEqual(14);
    })

    it('Updates _currentTurn', function() {
      scoreCalculator.increment(5, { frame: 1, roll: 2 });
      scoreCalculator.increment(5, { frame: 2, roll: 1 });
      expect(scoreCalculator._currentTurn).toEqual({ frame: 2, roll: 1 });
    });

    it('Adds correct score after a strike', function() {
      scoreCalculator.increment(10, { frame: 2, roll: 1 });
      scoreCalculator.increment(5, { frame: 2, roll: 2 });
      expect(scoreCalculator.increment(4, { frame: 3, roll: 1 })).toEqual(28);
    })

    it('Adds correct score after sequential strikes', function() {
      scoreCalculator.increment(10, { frame: 2, roll: 1 });
      scoreCalculator.increment(10, { frame: 3, roll: 1 });
      expect(scoreCalculator.increment(10, { frame: 2, roll: 1 })).toEqual(50);
    });

    it('Adds correct score after a spare', function() {
      scoreCalculator.increment(7, { frame: 1, roll: 2 });
      scoreCalculator.increment(3, { frame: 2, roll: 1 });
      scoreCalculator.increment(4, { frame: 2, roll: 2 });
      expect(scoreCalculator.increment(4, { frame: 3, roll: 1 })).toEqual(22);
    });
  });
});
