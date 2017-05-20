'use strict'

describe("BowlsTracker", function() {
var bowlsTracker
var pins;
var bowlingBall;

  beforeEach(function() {
    bowlsTracker = new BowlsTracker();
    pins = new Pins();
    bowlingBall = new BowlingBall();
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
    bowlingBall.roll(pins, bowlsTracker, 6);
    expect(bowlsTracker.bowlsLeft).toEqual(20);
    expect(bowlsTracker.bowlsRecord.length).toEqual(1);
    expect(bowlsTracker.bowlsRecord[0]).toEqual(6);
  });

});
