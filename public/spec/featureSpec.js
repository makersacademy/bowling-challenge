"use strict";

describe("Feature Test", function() {
  var frame;
  
  beforeEach(function() {
    frame = new Frame();
  });
  describe("adding rolls to frames", function() {
    it("records the player's rolls", function() {
      // frame = new Frame();
      var firstRoll = 1;
      var secondRoll = 2;
      frame.add(firstRoll);
      expect(frame.showRolls()).toContain(firstRoll);
      frame.add(secondRoll);
      expect(frame.showRolls()).toContain(secondRoll);
    });
    it("only accepts 2 rolls per frame", function() {
      // frame = new Frame();
      var firstRoll = 1;
      var secondRoll = 2;
      var thirdRoll = 3;
      frame.add(firstRoll);
      frame.add(secondRoll);
      frame.add(thirdRoll);
      expect(frame.showRolls().length).toBe(2);
      expect(frame.showRolls()).not.toContain(thirdRoll);
    })
  });
  
});
