"use strict";

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

    it('has a starting score of 0', function(){
      expect(game.getCurrentScore()).toEqual(0)
    });

    it('bowling returns a number', function(){
      expect(game.bowl()).toEqual(jasmine.any(Number));
    });

    it('adds bowled score to total score', function() {
      spyOn(game, "bowl").and.returnValue(5);
      expect(game.totalScore()).toEqual(5);
    });

    it('adds two scores together to total score', function() {
      spyOn(game, "bowl").and.returnValue(5);
      expect(game.totalScore()).toEqual(5);
      game.bowl.and.returnValue(4);
      expect(game.totalScore()).toEqual(9);
    });

});
