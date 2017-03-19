'use strict';

describe ("Game", function() {

  var game
  var frame1
  var frame2

  beforeEach(function(){
    game = new Game();
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
  });

  describe ("Calculating Scores", function(){
    // As a game,
    // So that the player can see the scores calculated,
    // I want to add the number of pins knocked down in each frame and keep tally.
    it("accepts a new frame and adds to totalScore", function() {
      frame1 = new Frame(5,0)
      game.saveCurrentFrame(frame1)
      game.calculateCurrentScoreFirstFrame()
      expect(game.currentScore).toEqual(5)
    });

    it("can add two frames consecutive frames together", function(){
      frame1 = new Frame(5,0)
      game.saveCurrentFrame(frame1)
      game.calculateCurrentScoreFirstFrame()
      frame2 = new Frame(5,0)
      game.saveCurrentFrame(frame2)
      game.calculateCurrentScore()
      expect(game.currentScore).toEqual(10)
    });

    // As a game,
    // So that the scores are calculated properly,
    // If the player scores a strike, the score in the following frame is doubled.
    describe ("when player scores a strike ", function(){

      it("sets bonusStrikeMode to true", function(){
        frame1 = new Frame(10,0)
        game.saveCurrentFrame(frame1)
        game.calculateCurrentScoreFirstFrame()
        expect(game.bonusStrikeMode).toBe(true)
      });

      it("it doubles the following frames score", function(){

      });

    });
  });
});
