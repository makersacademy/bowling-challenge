"use strict";

describe("Feature Test", function() {
  var game;
  var frame;
  beforeEach(function() {
    frame = new Frame();
    game = new Game();
  });
  describe("adding rolls to frame", function() {
    it("records 2 rolls per frame", function() {
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
  describe("adding frames to game", function() {
    it("records 10 frames per game", function() {
      for (var i = 1; i <= 10; i += 1) {
        game.add(frame);
      }
      expect(game.frames).toContain(frame);
      expect(game.frames.length).toBe(10);
    });
  })
});
