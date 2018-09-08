"use strict";

describe('BowlingModel', function() {
  var bowlingModel;

  beforeEach(function(){
    bowlingModel = new BowlingModel();
    spyOn(bowlingModel.scoreCalculator, 'increment');
    spyOn(bowlingModel.rollDecider, 'increment');
  });

  it('passes the pins knocked down to ScoreCalculator', function() {
    bowlingModel.increment(5);
    expect(bowlingModel.scoreCalculator.increment).toHaveBeenCalledWith(5);

  });

  it('passes the pins knocked down to RollDecider', function() {
    bowlingModel.increment(5);
    expect(bowlingModel.rollDecider.increment).toHaveBeenCalledWith(5);
  });
});
