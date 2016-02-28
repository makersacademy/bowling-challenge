"use strict";

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

    it('has a starting score of 0', function() {
      expect(game.getScore()).toEqual(0)
    });

    it('bowling returns a number', function() {
      expect(game.bowl()).toEqual(jasmine.any(Number));
    });

    it('adds score to total score', function() {
      spyOn(game, "_number").and.returnValue(5);
      game.bowl();
      expect(game.getScore()).toEqual(5);
    });

    it('adds two scores together to total score', function() {
      spyOn(game, "_number").and.returnValue(4);
      game.bowl();
      game.bowl();
      expect(game.getTotalScore()).toEqual(8);
    });

    it('keeps track of the number of rounds', function() {
      for (var i = 0; i < 8; i++) {
       game.bowl();
      }
      expect(game.getRoundNumber()).toEqual(4);
    });

    it('adds scores to an array for the round', function(){
      spyOn(game, "_number").and.returnValue(4);
      game.bowl();
      game.bowl();
      expect(game.getRoundScore()).toEqual([4,4])
    });

    it('sums scores for the round', function(){
      spyOn(game, "_number").and.returnValue(4);
      game.bowl();
      game.bowl();
      expect(game.getRoundTotal()).toEqual(8)
    });

    it('adds scores to an array of full scores', function(){
      spyOn(game, "_number").and.returnValue(4);
      game.bowl();
      game.bowl();
      game.bowl();
      game.bowl();
      expect(game.getFullScores()).toEqual([[4,4],[4,4]])
    });

    it('returns the scores for the previous round', function(){
      spyOn(game, "_number").and.returnValue(4);
      game.bowl();
      game.bowl();
      game.bowl();
      game.bowl();
      expect(game.getLastRound()).toEqual([4,4])
    });

    it('adds the next score twice when a spare is scored', function() {
      spyOn(game, "_number").and.returnValue(5);
      game.bowl();
      game.bowl();
      game.bowl();
      expect(game.getTotalScore()).toEqual(20);

    });
});
