'use strict'

describe("Bowls Logic", function() {
var bowlsTracker;
var pins;
var bowlingBall;

  beforeEach(function() {
    bowlsTracker = new BowlsTracker();
    pins = new Pins();
    bowlingBall = new BowlingBall();
  });

  it("can recognize a strike", function(){
    bowlingBall.roll(pins, bowlsTracker, 10);
    expect (_isAStrike(pins, bowlsTracker)).toBe(true);
  });

  it("can recognize a spare", function(){
    bowlingBall.roll(pins, bowlsTracker, 5);
    bowlingBall.roll(pins, bowlsTracker, 5);
    expect (_isASpare(pins, bowlsTracker)).toBe(true);
  });

});
