"use strict";

describe('ScoreCalculator', function() {
  //var RollDecider = require('../../public/js/RollDecider');
  var scoreCalculator, frame1, frame2;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
    frame1 = new Frame();
    frame2 = new Frame();
    frame1.addPins(3);
    frame1.addPins(3);
    frame2.addPins(3);
    frame2.addPins(3);
  })

  it('Returns the correct total score if no bonus points', function() {
    expect(scoreCalculator.score([frame1, frame2]).total).toEqual(12);
  });

  it('Returns an array of total scores per frame', function() {
    expect(scoreCalculator.score([frame1, frame2]).frameScores).toEqual([6, 6, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  describe('Bonus points', function() {
    it('Adds correct score after a strike', function() {
      // scoreCalculator.calculate(10, { frame: 2, roll: 1 });
      // scoreCalculator.calculate(5, { frame: 2, roll: 2 });
      // expect(scoreCalculator.calculate(4, { frame: 3, roll: 1 })).toEqual({ total: 28, scoresArray: [ 19, 9, 0, 0, 0, 0, 0, 0, 0, 0 ] });
    })

    it('Adds correct score after sequential strikes', function() {
      // scoreCalculator.calculate(10, { frame: 2, roll: 1 });
      // scoreCalculator.calculate(10, { frame: 3, roll: 1 });
      // expect(scoreCalculator.calculate(10, { frame: 2, roll: 1 })).toEqual({ total: 50, scoresArray: [ 20, 20, 10, 0, 0, 0, 0, 0, 0, 0 ] });
    });

    it('Adds correct score after a spare', function() {
      // scoreCalculator.calculate(7, { frame: 1, roll: 2 });
      // scoreCalculator.calculate(3, { frame: 2, roll: 1 });
      // scoreCalculator.calculate(4, { frame: 2, roll: 2 });
      // expect(scoreCalculator.calculate(4, { frame: 3, roll: 1 })).toEqual({ total: 22, scoresArray: [ 14, 8, 0, 0, 0, 0, 0, 0, 0, 0 ] });
    });
  });
});
