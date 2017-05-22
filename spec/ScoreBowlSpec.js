'use strict'

describe("Score Bowl", function() {
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

  it("exists!", function() {
    expect(scoreBowl).toBeDefined();
  });

  it("should record a regular roll", function(){
    bowlingBall.roll(pins, bowlsTracker, 5, scoreBowl);
    expect(scoreBowl.record[0]).toBe("5");
  });

  it("should record a gutterball", function(){
    bowlingBall.roll(pins, bowlsTracker, 0, scoreBowl);
    expect(scoreBowl.record[0]).toBe("-");
  });

  it("should record a regular strike", function(){
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    expect(scoreBowl.record[0]).toBe(null);
    expect(scoreBowl.record[1]).toBe("X");
  });

  it("should record a regular spare", function(){
    bowlingBall.roll(pins, bowlsTracker, 0, scoreBowl);
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    expect(scoreBowl.record[0]).toBe("-");
    expect(scoreBowl.record[1]).toBe("/");
  });

  it("should record a final frame strike", function(){
    bowlsTracker.bowlsLeft = 3
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    expect(scoreBowl.record[0]).toBe("X");
    expect(scoreBowl.record[1]).toBe("X");
    expect(scoreBowl.record[2]).toBe("X");
  });

  it("should record a final frame spare", function(){
    bowlsTracker.bowlsLeft = 3
    bowlingBall.roll(pins, bowlsTracker, 0, scoreBowl);
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    expect(scoreBowl.record[0]).toBe("-");
    expect(scoreBowl.record[1]).toBe("/");
    expect(scoreBowl.record[2]).toBe("X");
  });

  it("should record a 'last bowl' spare", function(){
    bowlsTracker.bowlsLeft = 3
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    bowlingBall.roll(pins, bowlsTracker, 3, scoreBowl);
    bowlingBall.roll(pins, bowlsTracker, 7, scoreBowl);
    expect(scoreBowl.record[0]).toBe("X");
    expect(scoreBowl.record[1]).toBe("3");
    expect(scoreBowl.record[2]).toBe("/");
  });

  it("should record a 'last bowl' spare", function(){
    bowlsTracker.bowlsLeft = 3
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    bowlingBall.roll(pins, bowlsTracker, 0, scoreBowl);
    expect(scoreBowl.record[0]).toBe("X");
    expect(scoreBowl.record[1]).toBe("X");
    expect(scoreBowl.record[2]).toBe("-");
  });

});
