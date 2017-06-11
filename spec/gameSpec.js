"use strict";

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('turns', function(){
    it('has a scorecard of 10 turns', function(){
      expect(game.scoreCard).toEqual([[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0, 0]]);
    });
  });

});
