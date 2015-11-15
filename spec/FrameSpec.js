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
});
