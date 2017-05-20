'use strict'

describe("Frame Logic", function() {
var bowlsTracker
var pins;
var bowlingBall;

  beforeEach(function() {
    bowlsTracker = new BowlsTracker();
    pins = new Pins();
    bowlingBall = new BowlingBall();
  });

it("can evaluate that it is the first bowl in a frame", function(){
  expect(_isfirstBowlInFrame(bowlsTracker)).toBe(true);
});

it("can evaluate that it is the second bowl in a frame", function(){
  bowlingBall.roll(pins, bowlsTracker, 6);
  expect(_isfirstBowlInFrame(bowlsTracker)).toBe(false);
});

it("can evaluate that it is not in the final frame", function(){
  expect(_isFinalFrame(bowlsTracker)).toBe(false);
});

it("can evaluate that it is in the final frame", function(){
  bowlsTracker.bowlsLeft = 1
  expect(_isFinalFrame(bowlsTracker)).toBe(true);
});

});
