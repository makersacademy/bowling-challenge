'use strict';

describe("Frame", function() {

  var frame
  beforeEach(function() {
    frame = new Frame();
  });

  // As a player
  // So I can see if I'm winning
  // I want to see how many pins I knock down

  it("has a score for the first ball bowled", function() {
    expect(frame.firstScore).toEqual(0);
  });

});
