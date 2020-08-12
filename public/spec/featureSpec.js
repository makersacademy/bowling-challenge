"use strict";

describe("Feature Test", function() {
  var game;
  var frame;
  var aRoll;
  beforeEach(function() {
    frame = new Frame();
    game = new Game();
    aRoll = jasmine.createSpy('aRoll');
  });
  describe("adding rolls to frame", function() {
    it("records 2 rolls per frame", function() {
      frame.add(aRoll);
      frame.add(aRoll);
      expect(frame.showRolls()).toEqual(jasmine.arrayContaining([aRoll, aRoll]));
      var extraRoll = jasmine.createSpy('extraRoll');
      frame.add(extraRoll);
      expect(frame.showRolls().length).toBe(2);
      expect(frame.showRolls()).not.toContain(extraRoll);
    });
    it("only records one roll per frame if first roll is strike", function() {
      var strikeRoll = 10;
      frame.add(strikeRoll);
      frame.add(aRoll);
      expect(frame.showRolls()).toContain(strikeRoll);
      expect(frame.showRolls().length).toBe(1);
      expect(frame.showRolls()).not.toContain(aRoll);
    });
  });
  describe("adding frames to game", function() {
    it("records 10 frames per game", function() {
      for (var i = 1; i <= 10; i += 1) {
        game.add(frame);
      }
      expect(game.frames).toContain(frame);
      expect(game.frames.length).toBe(10);
      game.add(frame);
      expect(game.frames.length).toBe(10);
      expect(game.frames.length).not.toBe(11);
    });
  });
});
