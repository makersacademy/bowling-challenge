'use strict';

describe ("Game", function() {

  var game
  var frame

  beforeEach(function(){
    game = new Game

    var frame = jasmine.createSpyObj('frame', ['score1','score2']);

    frame.score1(10);
    frame.score2(0);

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

    // As a game,
    // so that the game can do calculations,
    // I want have an empty array for accepting messages from frames.
    it("sets an empty array for game being played", function() {
      expect(game.totalScore).toEqual([])
    });

    it("accepts a new frame and adds to totalScore", function() {
      game.addCurrentFrame(frame)
      expect(game.totalScore).toEqual([frame])


    });
  });

});
