"use strict";

describe('BowlingModel', function() {
  //var BowlingModel = require('../../public/js/BowlingModel');
  var bowlingModel;

  beforeEach(function(){
    bowlingModel = new BowlingModel();
    spyOn(bowlingModel.turnIncrementer, 'incrementTurn').and.returnValue({frame: 1, roll: 2});
    spyOn(bowlingModel.turnIncrementer, 'incrementFrame').and.returnValue({frame: 2, roll: 1});
    spyOn(bowlingModel.scoreCalculator, 'updateArray').and.returnValue([5,0,0,0,0,0,0,0,0,0]);
    spyOn(bowlingModel.scoreCalculator, 'calculateTotal').and.returnValue(5);
    spyOn(bowlingModel.scoreCalculator, 'addStrike');
  });

  describe('.play', function() {
    it('requests ScoreCalculator to update scores array', function() {
      bowlingModel.play(5);
      expect(bowlingModel.scoreCalculator.updateArray).toHaveBeenCalledWith(5, 1);

    });

    it('requests total score from ScoreCalculator', function() {
      bowlingModel.play(5);
      expect(bowlingModel.scoreCalculator.calculateTotal).toHaveBeenCalled();

    });

    it('given no strike, invokes turnIncrement.incrementTurn', function() {
      bowlingModel.play(5);
      expect(bowlingModel.turnIncrementer.incrementTurn).toHaveBeenCalled();
    });

    it('given strike, invokes turnIncrement.incrementFrame', function() {
      bowlingModel.play(10);
      expect(bowlingModel.turnIncrementer.incrementFrame).toHaveBeenCalled();
    });

    it('given strike, invokes scoreCalculator.addStike', function() {
      bowlingModel.play(10);
      expect(bowlingModel.scoreCalculator.addStrike).toHaveBeenCalled();
    });

    it('returns turn, current total and scores array', function() {
      expect(bowlingModel.play(5)).toEqual({frame: 1, roll: 2, total: 5, scoresArray: [5,0,0,0,0,0,0,0,0,0]});
    });
  });

  describe('._isStrike', function() {
    it('returns true if player gets a strike', function() {
      expect(bowlingModel._isStrike(10)).toEqual(true);
    });

    it('returns false otherwise', function() {
      expect(bowlingModel._isStrike(5)).toEqual(false);
    });
  });
});
