'use strict';

describe ("Game", function() {

  var game

  beforeEach(function(){
    game = new Game
  });

  describe ("Upon instantiating", function() {

    it("is defined", function() {

      expect(game).toBeDefined();

    });

    // As a game,
    // so that the game is played properly,
    // A game has a current score set as 0 initially.
    it("has default current score of 0", function() {

      expect(game.currentScore).toEqual(0);

    });

  });

});
