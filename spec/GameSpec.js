'use strict';

describe("Game", function () {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("default status", function() {

    it('has no completed frames', function() {
      expect(game.completedFrames.length).toEqual(0);
    });

    it("game's score is zero", function() {
      expect(game.score).toEqual(0);
    });

    it('is not over', function() {
      expect(game.isOver).toBe(false);
    });
  });

  describe("only accepts integer values from 0 to 10", function() {

    it("won't accept a string", function() {
      expect(function() { game.bowl("X") } ).toThrow("Cannot read this input. Expected a number from 0 to 10.")
    });

    it("won't accept numbers greater than 10", function() {
      expect(function() { game.bowl(11) } ).toThrow("Cannot read this input. Expected a number from 0 to 10.")
    });

    it("won't accept numbers less than 0", function() {
      expect(function() { game.bowl(-1) } ).toThrow("Cannot read this input. Expected a number from 0 to 10.")
    });
  });

  describe("after first roll", function() {

    beforeEach(function() {
      game.bowl(4);
    });

    it('does not yet add the frame score to the game score', function() {
      expect(game.score).toEqual(0);
    });

    it("knows it's not longer on the first roll", function() {
      expect(game.isFirstRoll).toBe(false);
    });

    it("won't accept more pins bowled on the second roll than are remaining", function() {
      expect(function() { game.bowl(7) } ).toThrow("Cannot bowl more pins than are available.")
    });

  });

  describe("first completed frame", function () {

    beforeEach(function() {
      game.bowl(4);
      game.bowl(5);
    });

    it('adds the score of a completed frame to the game score', function() {
      expect(game.score).toEqual(9);
    });

    it('adds the completed frame to the completed frames array', function() {
      expect(game.completedFrames.length).toEqual(1);
    });

    it("increments frame count after frame completed", function() {
      expect(game.frameNumber).toEqual(2);
    });

  });

  describe("frame which is a spare", function() {

    beforeEach(function() {
      game.bowl(7);
      game.bowl(3);
    });

    it("knows the frame just completed was a spare", function() {
      expect(game.completedFrames.slice(-1)[0].isSpare).toBe(true);
    })
  })

  describe("frame following a spare", function() {

    beforeEach(function() {
      game.bowl(5);
      game.bowl(5);
      game.bowl(8);
    });

    it("calculates bonus and adds to previous frame's score", function(){
      expect(game.completedFrames.slice(-1)[0].score).toEqual(18);
    });

    it("doesn't add the score from this frame to the game score just yet", function(){
      expect(game.score).toEqual(18);
    });

    it("accurately calculates the game score including the second frame", function() {
      game.bowl(1);
      expect(game.score).toEqual(27);
    })
  });

  describe("frame which is a strike", function() {

    beforeEach(function() {
      game.bowl(10);
    });

    it("completes the frame after the first roll", function(){
      expect(game.completedFrames.slice(-1)[0].isComplete).toBe(true);
    });

    it("knows the completed frame was a strike", function() {
      expect(game.completedFrames.slice(-1)[0].isStrike).toBe(true);
    })
  })

  describe("frame following a strike", function() {

    beforeEach(function() {
      game.bowl(10);
      game.bowl(4);
      game.bowl(5);
    });

    it("knows the previous frame was a strike", function(){
      expect(game.completedFrames.slice(-2)[0].isStrike).toBe(true);
    });

    it("calculates bonus and adds to previous frame's score", function(){
      expect(game.completedFrames.slice(-2)[0].score).toEqual(19);
    });

    it("accurately calculates the game score including the second frame", function() {
      expect(game.score).toEqual(28);
    });
  });

  describe("sequential strikes", function() {

    beforeEach(function() {
      game.bowl(10);
      game.bowl(10);
    });

    it("doesn't yet update the game's score", function(){
      expect(game.score).toEqual(0);
    });

    it("knows the last completed frame was a strike", function(){
      expect(game.completedFrames.slice(-1)[0].isStrike).toBe(true);
    });

    it("knows the frame before that was also a strike", function(){
      expect(game.completedFrames.slice(-2)[0].isStrike).toBe(true);
    });

    it("updates the bonus score for the frame before last with 10", function(){
      expect(game.completedFrames.slice(-2)[0].bonusScore).toBe(10);
    });
  });

  describe("three strikes in a row", function() {

    beforeEach(function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
    });

    it("doesn't yet update the game's score", function(){
      expect(game.score).toEqual(0);
    });

    it("knows the very first frame was a strike", function(){
      expect(game.completedFrames.slice(-3)[0].isStrike).toBe(true);
    });

    it("updates the bonus score for the penultimate frame with 10", function(){
      expect(game.completedFrames.slice(-2)[0].bonusScore).toBe(10);
    });

    it("updates the actual score for first strike frame with 30", function(){
      expect(game.completedFrames.slice(-3)[0].score).toBe(30);
    });
  });

  describe("spare following a strike", function() {

    beforeEach(function() {
      game.bowl(10);
      game.bowl(4);
      game.bowl(6);
    });

  });

  describe("strike following a spare", function() {

    beforeEach(function() {
      game.bowl(4);
      game.bowl(6);
      game.bowl(10);
    });

  });

  describe("completed game", function() {

    beforeEach(function() {
      for (var i = 1; i < 11; i++) {
        game.bowl(4);
        game.bowl(5);
      }
    });

    it('is over after ten frames have been completed', function() {
      expect(game.isOver).toEqual(true);
    });

    it('calculates total score', function() {
      expect(game.score).toEqual(90);
    });
  });

  describe("gutter game", function() {

    beforeEach(function() {
      for (var i = 1; i < 11; i++) {
        game.bowl(0);
        game.bowl(0);
      }
    });

    it('expects a zero score', function() {
      expect(game.score).toEqual(0);
    });

    it('marks a zero score game as a Gutter Game', function() {
      expect(game.isGutterGame).toBe(true);
    });
  });
});
