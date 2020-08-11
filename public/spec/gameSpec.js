"use strict";

describe("Game", function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });
  describe("getPoints()", function() {
    it("returns total - no bonus points accrued", function() {
      var aRoll = 4;
      frame.add(aRoll);
      frame.add(aRoll);
      game.add(frame);
      expect(game.getPoints()).toBe(aRoll + aRoll);
    });
    // it("returns total inclusive of bonus when a spare has been rolled", function() {
    //   var aRoll = 5;
    //   frame.add(aRoll);
    //   frame.add(aRoll);
    //   game.add(frame);
    //   var anotherFrame = new Frame();
    //   anotherFrame.add(aRoll);
    //   game.add(anotherFrame);
    //   expect(game.getPoints()).toBe(aRoll+aRoll+aRoll+aRoll);
    // })
  });
});
