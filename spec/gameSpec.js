'use strict';

describe("Game", function() {
  //var Game = require('../src/game.js');
    var game;

    beforeEach(function() {
    game = new Game();
  });

  describe("Game Start", function() {
    it("starts a game with a 10 frames maximum", function() {
      expect(game.MAX_FRAMES).toEqual(10);
    });

    it("starts a game with 10 pins", function() {
      expect(game.gamePins).toEqual(10);
    });

    it("starts the game with a score of 0", function() {
      expect(game.totalPoints()).toEqual(0);
    });
  });

  describe("Game End", function() {

    it ("ends the game after 10 frames", function() {
      game.currentFrame;
      for (var i = 0; i < 10; i++) {
        game.playFrame();
      }
      expect(function(){ game.playFrame(); }).toThrowError("Game Over");
    });
  });

  describe("Game Frames", function() {

    it('confirms each play function plays a frame', function(){
      game.playFrame();
      expect(game.currentFrame).toEqual(1);
    });

    it("tracks the current frame", function() {
      game.bowl(1);
      expect(game.getCurrentFrame()).toBe(game.frames[2]);
    });

    it("allows a maximum of two roles per frame", function() {
      game.gameFrame;
      for (var i = 0; i < 2; i++) {
        game.countGameFrame();
      }
      expect(function(){game.countGameFrame(); }).toThrowError("Error: max role per turn is two");
    });
  });

  describe("Game Scores", function() {

    it("keeps track of aggregate frame points", function () {
      game.frameScore(2);
      game.frameScore(3);
      expect(game.totalFramePoints()).toEqual(5);
    });

    it("an individual frame has a maximum total score of 30", function() {
      game.frameScore(29);
      game.frameScore(5);
      expect(function(){game.totalFramePoints(); }).toThrowError("Error: max. frame point exceeded");
    });

    it("provides a running tally of total points", function() {
      game.updateGamePoints(4);
      game.updateGamePoints(3);
      expect(game.totalPoints()).toEqual(7);
    });

    it("a game has a maximum total score of 300", function() {
      game.updateGamePoints(299);
      game.updateGamePoints(5);
      expect(function(){game.totalPoints(); }).toThrowError("Error: max. point exceeded");
    });

    it("return a score of Gutter Game if no points are scored", function() {
      game.updateGamePoints(299);
      game.updateGamePoints(5);
      expect(function(){game.totalPoints(); }).toThrowError("Error: max. point exceeded");
    });

    // it("returns a strike if all pins are knocked down on first throw", function () {

    // });
  });
});
