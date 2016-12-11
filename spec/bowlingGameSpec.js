'use strict';

describe("bowlingGame", function() {
  var game;

  beforeEach(function(){
    game = new BowlingGame;
  });

  describe("Initialize", function(){
    it("Should initialize with score property set to zero", function(){
      expect(game.score).toEqual(0);
    });
  });

  describe("#roll", function(){
    it("should allow input of a number of pins and store it in the current roll score", function(){
      game.roll(7);
      expect(game._rollScore).toEqual(7);
    });

    it("should move on to the next frame when a player gets a strike", function(){
      game.roll(10);
      expect(game._frame).toEqual(2)
    });

    it("should move on to the next frame when a player rolls twice", function(){
      game.roll(4);
      game.roll(3);
      expect(game._frame).toEqual(2)
    });

    it("should double the score in the next frame if a player rolls a strike the previous frame", function(){
      game.roll(10);
      game.roll(5);
      game.roll(1);
      expect(game.score).toEqual(22)
    });
  });



});
