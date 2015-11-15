"use strict";

describe("Frame:", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("registers the number of pins knocked down by a player's throw", function()
   {
    frame.recordPinsHit(5);
    expect(frame.remainingPins).toEqual(5);
  });

  it("registers a gutter ball when a player doesn't knock down any pins",
  function() {
    frame.recordPinsHit(0);
    expect(frame.remainingPins).toEqual(10);
  });

  it("knows it is over after 2 throws", function() {
    frame.recordPinsHit(3);
    frame.recordPinsHit(4);
    expect(frame.isOver()).toEqual(true);
  });
});
