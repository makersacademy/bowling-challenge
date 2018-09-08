"use strict";

describe('ScoreCalculator', function() {
  //var RollDecider = require('../../public/js/RollDecider');
  var scoreCalculator;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
  })

  it('Instantiates with a score of zero', function() {
    expect(scoreCalculator._runningTotal).toEqual(0);
  });

  it('Instantiates current turn: frame = 1, roll = 1', function() {
    expect(scoreCalculator._currentTurn).toEqual({ frame: 1, roll: 1 });
  })

  it('Keeps a running total of score (no strikes)', function() {
    scoreCalculator.increment(5, { frame: 1, roll: 2 });
    scoreCalculator.increment(5, { frame: 2, roll: 1 });
    expect(scoreCalculator.increment(5, { frame: 2, roll: 2 })).toEqual(15);
  })

  it('Updates _currentTurn', function() {
    scoreCalculator.increment(5, { frame: 1, roll: 2 });
    scoreCalculator.increment(5, { frame: 2, roll: 1 });
    expect(scoreCalculator._currentTurn).toEqual({ frame: 2, roll: 1 });
  });

  it('Adds on the next total frame score when getting a strike', function() {
    console.log('beginning of test')
    scoreCalculator.increment(10, { frame: 2, roll: 1 });
    scoreCalculator.increment(5, { frame: 2, roll: 2 });
    expect(scoreCalculator.increment(5, { frame: 3, roll: 1 })).toEqual(30);
  })

});
