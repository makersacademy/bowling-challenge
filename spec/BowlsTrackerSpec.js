'use strict'

describe("BowlsTracker", function() {
var bowlsTracker
var pins;
var bowlingBall;
var scoreBowl;

  beforeEach(function() {
    bowlsTracker = new BowlsTracker();
    pins = new Pins();
    bowlingBall = new BowlingBall();
    scoreBowl = new ScoreBowl();
  });

  it("exists!", function() {
    expect(bowlsTracker).toBeDefined();
  });

  it("should start with 21 bowls remaining", function() {
    expect(bowlsTracker.bowlsLeft).toEqual(21);
  });

  it("should start with an empty record", function() {
    expect(bowlsTracker.bowlsRecord.length).toEqual(0);
  });

  it("should record a bowl", function(){
    bowlingBall.roll(pins, bowlsTracker, 6, scoreBowl);
    expect(bowlsTracker.bowlsLeft).toEqual(20);
    expect(bowlsTracker.bowlsRecord.length).toEqual(1);
    expect(bowlsTracker.bowlsRecord[0]).toEqual(6);
  });

  it("should record a regular strike", function(){
    bowlingBall.roll(pins, bowlsTracker, 10, scoreBowl);
    expect(bowlsTracker.bowlsLeft).toEqual(19);
    expect(bowlsTracker.bowlsRecord.length).toEqual(1);
    expect(bowlsTracker.bowlsRecord[0]).toEqual(10);
  });
});
