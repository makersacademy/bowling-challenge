'use strict';

describe("Game", function () {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("default status", function () {

    it('has zero completed frames', function() {
      expect(game.completedFrames.length).toEqual(0);
    });

    it("game's score is zero", function() {
      expect(game.score).toEqual(0);
    });

    it('is not over', function() {
      expect(game.isOver).toBe(false);
    });
  });

  describe("startNewFrame", function () {

    it('starts a new frame', function() {
      game.startNewFrame();
      expect(game.currentFrame).toEqual(jasmine.any(Frame));
    });
  });

  describe("first completed frame", function () {

    beforeEach(function() {
      game.startNewFrame();
      game.currentFrame.addRollOneScore(4);
      game.currentFrame.addRollTwoScore(5);
      game.completeFrame();
    });

    it('adds the score of a completed frame to the game score', function() {
      expect(game.score).toEqual(9);
    });

    it('adds the completed frame to the completed frames array', function() {
      expect(game.completedFrames.length).toEqual(1);
    });

    it('starts a new frame', function() {
      game.startNewFrame();
      expect(game.currentFrame.rollOneScore).toBeFalsy();
    });
  });

  describe("completed game", function() {

    beforeEach(function() {
      for (var i = 1; i < 11; i++) {
        game.startNewFrame();
        game.currentFrame.addRollOneScore(4);
        game.currentFrame.addRollTwoScore(5);
        game.completeFrame();
      }
    });

    it('after ten frames have finished', function() {
      expect(game.isOver).toEqual(true);
    });

    it('calculates total score', function() {
      expect(game.score).toEqual(90);
    });
  });
});
