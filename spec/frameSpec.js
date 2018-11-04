describe("Frame", function() {
  var Frame = require("../lib/frame")
  var Game = require("../lib/game")
  var frame;
  var frameTwo;
  var game;

  beforeEach(function() {
    game = new Game;
    frame = game.frames[0];
    frameTwo = game.frames[1];
  });

  describe("total", function() {
    it("starts at 0", function() {
      expect(frame.total).toEqual(0);
    });
  });

  describe(".add()", function() {
    it("adds value to total", function() {
      frame.add(5);
      expect(frame.total).toEqual(5);
    });
  });

  describe(".roll()", function() {
    it("adds roll to rolls", function() {
      frame.roll(5);
      expect(frame.rolls).toEqual(1);
    });
    it("marks game as complete after two rolls", function() {
      frame.roll(1);
      frame.roll(1);
      expect(frame.isComplete()).toEqual(true);
    });
    it("marks game as complete after strike", function() {
      frame.roll(10);
      expect(frame.isComplete()).toEqual(true);
    });
    it("adds its value to previous frame totals if they are due a bonus", function() {
      frame.roll(10);
      frameTwo.roll(5);
      expect(frame.total).toEqual(15);
    });
  });

  describe(".hasBonus()", function() {
    it("begins false", function() {
      expect(frame.hasBonus()).toEqual(false);
    });
  });

  describe(".bonusRolls", function() {
    it("begins empty", function() {
      expect(frame.bonusRolls).toEqual(0);
    });
    it("increments by 2 after strike", function() {
      frame.roll(10);
      expect(frame.bonusRolls).toEqual(2);
    });
    it("increments by 1 after spare", function() {
      frame.roll(5);
      frame.roll(5);
      expect(frame.bonusRolls).toEqual(1);
    });
    it("decreases by 1 after another roll", function() {
      frame.roll(10);
      frameTwo.roll(1);
      expect(frame.bonusRolls).toEqual(1);
    });
  });

  describe(".reduceBonus()", function() {
    it("reduces bonusRolls by 1", function() {
      frame.roll(10);
      frame.reduceBonus();
      expect(frame.bonusRolls).toEqual(1);
    });
  });

  describe(".isComplete()", function() {
    it("is initially false", function() {
      expect(frame.isComplete()).toEqual(false);
    });
    it("becomes true after two rolls", function() {
      frame.roll(1);
      frame.roll(1);
      expect(frame.isComplete()).toEqual(true);
    });
  })

});
