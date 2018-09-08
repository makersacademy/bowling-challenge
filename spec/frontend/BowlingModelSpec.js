"use strict";

describe('BowlingModel', function() {
  //var BowlingModel = require('../../public/js/BowlingModel');
  var bowlingModel;

  beforeEach(function(){
    bowlingModel = new BowlingModel();
    spyOn(bowlingModel.turnIncrementer, 'increment').and.returnValue({frame: 1, roll: 2});
    spyOn(bowlingModel.scoreCalculator, 'increment').and.returnValue(5);
  });

  it('passes the pins knocked down to RollDecider', function() {
    bowlingModel.increment(5);
    expect(bowlingModel.turnIncrementer.increment).toHaveBeenCalledWith(5);
  });

  it('passes the pins knocked down to ScoreCalculator', function() {
    bowlingModel.increment(5);
    expect(bowlingModel.scoreCalculator.increment).toHaveBeenCalledWith(5, { frame: 1, roll: 2 });

  });

  it('returns next current frame & roll and current score', function() {
    expect(bowlingModel.increment(5)).toEqual({frame: 1, roll: 2, score: 5});
  });
});
