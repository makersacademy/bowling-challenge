'use strict';

describe("Game", function() {

    var game;
    var frame;
    var i;

  beforeEach(function() {
    game = new Game();
  });

  it("has a new frame at the start", function() {
    expect(game.currentFrame).toEqual(new Frame());
  });

  it("has an empty record of frames played", function() {
    expect(game.frames).toEqual([]);
  });

  it("has a total score for the game", function() {
    expect(game.totalScore).toEqual(0);
  });

  describe("bowl", function(){
    it("bowling a ball calculates a score", function(){
      spyOn(Math, 'random').and.returnValue(0.3);
      game.bowl();
      expect(game.getFrameScore()).toEqual(4)
    });
  });

  describe("checkStrike", function() {
    it("starts a new frame if a strike is scored", function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      game.bowl();
      expect(game.currentFrame.score).toEqual([])
    });

    it("closes the frame if a strike is scored", function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      game.bowl();
      expect(game.frames.length).toEqual(1)
    });
  });

  describe("checkFrameOver", function() {
    it("starts a new frame if two balls are bowled", function(){
      game.bowl();
      expect(game.bowl()).toEqual(this.startNewFrame)
    });
  });

  describe("startNewFrame", function() {
    it("starts a new frame", function(){
      expect(game.startNewFrame()).toEqual(this.currentFrame);
    });
  });

  describe("addFrame", function() {
    it("adds a frame", function(){
      game.addFrame(this.currentFrame)
      expect(game.frames).toContain(this.currentFrame)
    });
  });

  describe("getFrameScore", function() {
    it("calculates the total score for the current frame", function(){
      spyOn(Math, 'random').and.returnValue(0.2);
      game.bowl();
      game.bowl();
      expect(game.totalScore).toEqual(5)
    });
  });

  describe("totalScore", function() {
    it("calculates the total score for the game", function(){
      spyOn(Math, 'random').and.returnValue(0.2);
      for(i = 0; i < 10; i++) {
      game.bowl();
      game.bowl();
    }
      expect(game.totalScore).toEqual(50)
    });
  });

  describe("checkGameOver", function() {
    it("ends game if ten frames have been bowled", function(){
      for(i = 0; i < 10; i++) {
        game.addFrame();
      };
      expect(game.isGameOver()).toEqual(true)
    });
  });

});
