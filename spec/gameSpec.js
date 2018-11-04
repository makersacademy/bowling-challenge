describe("Game", function() {
  var Game = require("../lib/game")
  var Frame = require("../lib/frame")
  var game;

  beforeEach(function() {
    game = new Game
  });

  describe(".frames", function() {
    it("contains 10 Frame objects", function() {
      expect(game.frames.length).toEqual(10);
      expect(game.frames[0]).toEqual(jasmine.any(Frame));
    });
  });

  describe(".currentFrame()", function() {
    it("returns first frame initially", function() {
      expect(game.currentFrame()).toBe(game.frames[0]);
    });
    it("returns first frame that is not complete", function() {
      game.frames[0].roll(10);
      expect(game.currentFrame()).toBe(game.frames[1]);
    });
  });

  describe(".roll()", function() {
    it("calls .roll on current frame", function() {
      spyOn(game.currentFrame(), "roll")
      game.roll(5);
      expect(game.currentFrame().roll).toHaveBeenCalled();
    });
  });

  describe(".total()", function() {
    it("begins at 0", function() {
      expect(game.total()).toEqual(0);
    });
    it("returns sum of all frame totals", function() {
      game.roll(8);
      game.roll(8);
      game.roll(8);
      expect(game.total()).toEqual(24);
    });
  });

  describe(".isComplete()", function() {
    it("returns false if any frame incomplete", function() {
      for (var i = 0; i < 9; i++) {
        game.roll(10);
      };
      expect(game.isComplete()).toEqual(false);
    });

    it("returns true if all frames complete", function() {
      for (var i = 0; i < 10; i++) {
        game.roll(2);
        game.roll(4);
      };
      expect(game.isComplete()).toEqual(true);
    });
  })

});
