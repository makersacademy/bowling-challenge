"use strict";

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('turns', function(){
    it('has a scorecard of 10 turns', function(){
      expect(game.scoreCard[8]).toEqual([0, 0]);
      expect(game.scoreCard[9]).toEqual([0, 0, 0]);
      expect(game.scoreCard[10]).toBe(undefined);
    });
  });

});
