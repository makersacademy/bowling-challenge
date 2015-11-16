"use strict";

describe("Frame:", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("has ten pins before a ball is bowled", function() {
    expect(frame.STARTING_PINS).toEqual(10);
  });

  it("records the number of pins knocked down by a player's throw", function()
   {
    frame.recordPinsHit(5);
    expect(frame.remainingPins).toEqual(5);
  });

  it("records its score", function() {
    frame.recordPinsHit(2);
    frame.recordPinsHit(6);
    expect(frame.totalScore()).toEqual(8);
  });

  it("records a gutter ball when a player doesn't knock down any pins",
  function() {
    frame.recordPinsHit(0);
    expect(frame.remainingPins).toEqual(10);
  });

  it("records a Strike when a player knocks down all pins with their first\
    throw", function() {
    frame.recordPinsHit(10);
    expect(frame.remainingPins).toEqual(0);
  });

  it("throws an error if there is an attempt to record more pins hit than\
     there are pins remaining", function() {
    frame.recordPinsHit(7);
    expect(function() {frame.recordPinsHit(4);} ).toThrow(new Error ("Cannot hit more than 10 pins"));
  });

  it("resets after the game is over", function() {
    frame.recordPinsHit(2);
    frame.recordPinsHit(3);
    frame.recordPinsHit(4);
    expect(frame.gameHistory).toEqual([[2, 3]]);
    expect(frame.frameHistory.length).toEqual(1);
  });

})

describe("Game is over:", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("after 2 throws", function() {
    frame.recordPinsHit(3);
    frame.recordPinsHit(4);
    expect(frame.isOver()).toEqual(true);
  });

  it("if the first throw was a Strike", function() {
    frame.recordPinsHit(10);
    expect(frame.isOver()).toEqual(true);
  });
});
