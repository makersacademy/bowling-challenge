'use strict'

describe("Bowls Logic", function() {
  var bowlsTracker;
  var pins;
  var bowlingBall;
  var scoreBowl;
  var totalScoreCalculator;

    beforeEach(function() {
      bowlsTracker = new BowlsTracker();
      pins = new Pins();
      bowlingBall = new BowlingBall();
      scoreBowl = new ScoreBowl();
      totalScoreCalculator = new TotalScoreCalculator()
  });

  it("can recognize a strike", function(){
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    expect (_isAStrike(pins, bowlsTracker)).toBe(true);
  });

  it("can recognize a spare", function(){
    bowlingBall.roll(pins, bowlsTracker, 5, scoreBowl);
    bowlingBall.roll(pins, bowlsTracker, 5, scoreBowl);
    expect (_isASpare(pins, bowlsTracker)).toBe(true);
  });

});
