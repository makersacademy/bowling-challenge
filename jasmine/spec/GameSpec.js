'use strict';

describe ("Game", function() {

  var game
  // declaring frame as a variable
  // var frame

  beforeEach(function(){
    game = new Game();

    // create a new spy object to double frame
    // var frame = jasmine.createSpyObj('frame', ['score1','score2']);
    // frame.score1(10);
    // frame.score2(0);

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

    // As a game,
    // So that the player can see the scores calculated,
    // I want to add the number of pins knocked down in each frame and keep tally.
    it("accepts a new frame and adds to totalScore", function() {
      game.saveCurrentFrame(frame)
      expect(game.totalScore).toEqual([frame])
      pending();
    });

    // As a game,
    // So that the scores are calculated properly,
    // If the player scores a strike, the score in the following frame is doubled.
    it("calculates ")

  });

});
