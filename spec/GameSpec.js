'use strict';

describe("Game", function () {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("default status", function () {

    it('defaults to zero completed frames', function() {
      expect(game.completedFrames.length).toEqual(0);
    });

    it("defaults the game's score to zero", function() {
      expect(game.score).toEqual(0);
    });

    it('has a current frame', function() {
      expect(game.currentFrame).toEqual(jasmine.any(Frame));
    });
  });

  describe("first completed frame", function () {

    it('adds the score of a completed frame to the game score', function() {
      game.currentFrame.rollOneScore(4);
      game.currentFrame.rollTwoScore(5);
      game.completeFrame();
      expect(game.score).toEqual(9);
    });

    it('adds the completed frame to the completed frames array', function() {
      game.currentFrame.rollOneScore(4);
      game.currentFrame.rollTwoScore(5);
      game.completeFrame();
      expect(game.completedFrames.length).toEqual(1);
    });
  });
});
