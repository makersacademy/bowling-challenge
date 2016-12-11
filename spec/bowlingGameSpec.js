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
      expect(game.roll(7)).toEqual(7)
    });

    it("should move on to the next frame when a player gets a strike", function(){
      game.roll(10)
      expect(game._frame).toEqual(2)
    });
  });



});
