'use strict';

describe("Game", function () {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("default status", function () {

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
  });

  describe("frame which is a spare", function() {

    beforeEach(function() {
      game.bowl(7);
      game.bowl(3);
    });

    it("knows the current frame is complete after the first roll", function(){
      expect(game.currentFrame.isComplete).toBe(true);
    });

    it("knows the current frame is a strike", function() {
      expect(game.currentFrame.isSpare).toBe(true);
    })
  })

  describe("frame following a spare", function() {

    beforeEach(function() {
      game.bowl(5);
      game.bowl(5);
      game.bowl(8);
    });

    it("knows the previous frame is a Frame", function(){
      expect(game.completedFrames.slice(-1)[0]).toEqual(jasmine.any(Frame));
    });

    it("knows the previous frame was a spare", function(){
      expect(game.completedFrames.slice(-1)[0].isSpare).toBe(true);
    });

    it("calculates bonus and adds to previous frame's score", function(){
      expect(game.completedFrames.slice(-1)[0].score).toEqual(18);
    });
  });


  describe("frame which is a strike", function() {

    beforeEach(function() {
      game.bowl(10);
    });

    it("knows the current frame is complete after the first roll", function(){
      expect(game.currentFrame.isComplete).toBe(true);
    });

    it("knows the current frame is a strike", function() {
      expect(game.currentFrame.isStrike).toBe(true);
    })
  })

  describe("frame following a strike", function() {

    beforeEach(function() {
      game.bowl(10);
      game.bowl(4);
      game.bowl(5);
    });

    it("knows the previous frame is a Frame", function(){
      expect(game.completedFrames.slice(-1)[0]).toEqual(jasmine.any(Frame));
    });

    it("knows the previous frame was a strike", function(){
      expect(game.completedFrames.slice(-2)[0].isStrike).toBe(true);
    });

    it("calculates bonus and adds to previous frame's score", function(){
      expect(game.completedFrames.slice(-2)[0].score).toEqual(19);
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
