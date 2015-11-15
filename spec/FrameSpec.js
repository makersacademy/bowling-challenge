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

  it("records its score", function() {
    frame.recordPinsHit(2);
    frame.recordPinsHit(6);
    expect(frame.totalScore()).toEqual(8);
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
