"use strict";

describe("Feature Test", function() {
  var frame;
  
  beforeEach(function() {
    frame = new Frame();
  });
  describe("add()", function() {

    it("records only 2 rolls", function() {
      var firstRoll = 1;
      var secondRoll = 2;
      var thirdRoll = 3;
      frame.add(firstRoll);
      expect(frame.showRolls()).toContain(firstRoll);
      frame.add(secondRoll);
      expect(frame.showRolls()).toContain(secondRoll);
      frame.add(thirdRoll);
      expect(frame.showRolls().length).toBe(2);
      expect(frame.showRolls()).not.toContain(thirdRoll);
    });
    
  });
  
});
