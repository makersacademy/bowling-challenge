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

});
