'use strict';

describe("bowlingGame", function() {
  var game;

  beforeEach(function(){
    game = new BowlingGame;
  });

  describe("Initialize", function(){
    it("Should initialize with score property set to zero", function(){
      expect(game.scoreTotal).toEqual(0);
    });
  });

  describe("#roll", function(){
    it("should allow input of a number of pins and store it in the current roll score", function(){
      game.roll(7);
      expect(game._rollScore).toEqual(7);
    });
  });

  it("should store the score in scoresheet after finishing a frame", function(){
    game.roll(10);
    expect(game.scoreSheet).toEqual([10])
  });
});
