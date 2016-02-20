"use strict";

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

    it('has a starting total score of 0', function(){
      expect(game.totalScore()).toEqual(0)
    });

    it('bowling returns a number', function(){
      expect(game.bowl()).toEqual(jasmine.any(Number));
    });

    it('adds bowled score to current score', function(){
      spyOn(game, "bowl").and.returnValue(5)
      expect(game.currentScore()).toEqual(5)
    });

});
