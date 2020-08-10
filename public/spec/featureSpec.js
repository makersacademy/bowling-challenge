"use strict";

describe("Feature Test", function() {
  var frame;

  it("a frame records the player's rolls", function() {
    frame = new Frame();
    var firstRoll = 1;
    var secondRoll = 2;
    frame.add(firstRoll);
    expect(frame.showRolls()).toContain(firstRoll);
    frame.add(secondRoll);
    expect(frame.showRolls()).toContain(secondRoll);
  });
});
