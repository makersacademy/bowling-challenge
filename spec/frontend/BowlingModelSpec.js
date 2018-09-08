"use strict";

describe('BowlingModel', function() {
  //var BowlingModel = require('../../public/js/BowlingModel');
  var bowlingModel;

  beforeEach(function(){
    bowlingModel = new BowlingModel();
    spyOn(bowlingModel.scoreCalculator, 'increment').and.returnValue(5);
    spyOn(bowlingModel.rollDecider, 'increment').and.returnValue({frame: 1, roll: 2});
  });

  it('passes the pins knocked down to ScoreCalculator', function() {
    bowlingModel.increment(5);
    expect(bowlingModel.scoreCalculator.increment).toHaveBeenCalledWith(5);

  });

  it('passes the pins knocked down to RollDecider', function() {
    bowlingModel.increment(5);
    expect(bowlingModel.rollDecider.increment).toHaveBeenCalledWith(5);
  });

  it('returns the current frame, roll and score', function() {
    expect(bowlingModel.increment(5)).toEqual({frame: 1, roll: 2, score: 5});
  });
});
