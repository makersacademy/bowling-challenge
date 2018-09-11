"use strict";

describe('BowlingModel', function() {
  //var BowlingModel = require('../../public/js/BowlingModel');
  var bowlingModel;

  beforeEach(function(){
    bowlingModel = new BowlingModel();
    spyOn(bowlingModel.turnIncrementer, 'incrementTurn').and.returnValue({frame: 1, roll: 2});
    spyOn(bowlingModel.turnIncrementer, 'incrementFrame').and.returnValue({frame: 2, roll: 1});
    spyOn(bowlingModel.scoreCalculator, 'calculate').and.returnValue({total: 5, scoresArray: [5,0,0,0,0,0,0,0,0,0]});
  });

  describe('.play', function() {
    it('given no strike, invokes turnIncrement.incrementTurn', function() {
      bowlingModel.play(5);
      expect(bowlingModel.turnIncrementer.incrementTurn).toHaveBeenCalled();
    });

    it('given strike, invokes turnIncrement.incrementFrame', function() {
      bowlingModel.play(10);
      expect(bowlingModel.turnIncrementer.incrementFrame).toHaveBeenCalled();
    });

    it('passes the pins knocked down to ScoreCalculator', function() {
      bowlingModel.play(5);
      expect(bowlingModel.scoreCalculator.calculate).toHaveBeenCalledWith(5);

    });

    it('returns next current turn, current total and scores array', function() {
      expect(bowlingModel.play(5)).toEqual({frame: 1, roll: 2, total: 5, scoresArray: [5,0,0,0,0,0,0,0,0,0]});
    });
  });

  describe('.isStrike', function() {
    it('returns true if player gets a strike', function() {
      expect(bowlingModel.isStrike(10)).toEqual(true);
    });

    it('returns false otherwise', function() {
      expect(bowlingModel.isStrike(5)).toEqual(false);
    });
  });
});
