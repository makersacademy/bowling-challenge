"use strict";

describe('ScoreCalculator', function() {
  //var RollDecider = require('../../public/js/RollDecider');
  var scoreCalculator;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
  })

  it('Instantiates with a score of zero', function() {
    expect(scoreCalculator.calculateTotal(0)).toEqual(0);
  });

  describe('.calculateTotal', function() {
    it('Returns the total current score', function() {
      scoreCalculator._scoreArray = [5,6,7,8,0,0,0,0,0,0];
      expect(scoreCalculator.calculateTotal()).toEqual(26);
    });
  });

  describe('.updateArray', function() {
    it('Keeps a running total of the score, per frame', function() {
      scoreCalculator.updateArray(5, 1);
      scoreCalculator.updateArray(4, 1);
      expect(scoreCalculator.updateArray(5, 2)).toEqual([ 9, 5, 0, 0, 0, 0, 0, 0, 0, 0 ]);
    });
  });


  describe('.addStrike', function() {
  });

  describe('Edge cases', function() {
  });
});
