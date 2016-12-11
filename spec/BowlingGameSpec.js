'use strict';

describe("BowlingGame", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new BowlingGame();
    frame = jasmine.createSpyObj('frame', ['testMethod']);
  });

  describe("- properties", function() {
    it("can record frames played", function() {
      expect(game.framesInPlay).toEqual([]);
    });

    it("should record total score", function() {
      expect(game.totalScore).toEqual(0);
    });

    // it("should have a frameIndex to increment", function() {
    //   expect(game.frameIndex).toEqual(0);
    // });
  });

  describe("- rolling a ball", function() {
    it("should add new frame on first roll", function() {
      game.roll(2);
      expect(game.framesInPlay.length).toEqual(1);
    });

    it("should add a second frame on third go, after two balls have been thrown", function() {
      game.roll(2);
      game.roll(5);
      game.roll(6);
      expect(game.framesInPlay.length).toEqual(2);
    });

    it("should move to next frame if Player rolls a Strike", function() {
      game.roll(10)
      game.roll(1)
      expect(game.framesInPlay.length).toEqual(2)
    });
  });

  describe("- checking last frame", function() {
    it("should know if the last frame was a strike", function() {
      game.roll(10)
      expect(game.framesInPlay.slice(-1)[0].isStrike).toEqual(true)
    });

    it("should know if the last frame was a spare", function() {
      game.roll(5)
      game.roll(5)
      expect(game.framesInPlay.slice(-1)[0].isSpare).toEqual(true)
      expect(game.framesInPlay.slice(-1)[0].isStrike).toEqual(false)
    });
  });

  describe("- checking for tenth frame", function() {
    it("should know if current frame in play is the tenth", function() {
      for (var i = 0; i < 10; i++) {
        game.roll(10)
      };
      expect(game._isTenthFrame()).toEqual(true)
    });

    it("should let Player know game has ended after tenth frame play", function() {
      for (var i = 0; i < 10; i++) {
        game.roll(10)
      };
      expect(game.roll(2)).toEqual("Game has ended")
    });
  });

  describe("- resetting the game", function() {
    it("should throw an error if Player has completed a full game", function() {
      for (var i = 0; i < 11; i++) {
        game.roll(10)
      };
      expect(function(){ game.roll(1); }).toThrowError("Your game has finished, please reset if you would like to play again.")
    });

    it("should be able to reset game", function() {
      game.roll(1)
      game.resetGame()
      expect(game.framesInPlay.length).toEqual(0)
    });
  });



});
