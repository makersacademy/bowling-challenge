'use strict';

describe("Feature test ", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("starts a new game", function() {
    it("with a total of zero points", function() {
      expect(game.totalScore()).toEqual(0);
    });
    it("starts on frame 1", function() {
      expect(game.currentFrame.frameNumber).toEqual(1);
    });
  });

  describe("adds score", function() {
    it("from first frame", function() {
      game.currentFrame.firstBowl(2)
      game.currentFrame.secondBowl(4)
      expect(game.score).toEqual(6)
    });
    it("from the second frame", function(){
      game.currentFrame.firstBowl(2)
      game.currentFrame.secondBowl(4)
      game.currentFrame.firstBowl(4)
      game.currentFrame.secondBowl(5)
      expect(game.totalScores).toContain(15)
    })
  });

  describe("strikes", function() {
    it("adds bonus for strike", function() {
      game.currentFrame.firstBowl(10)
      game.currentFrame.secondBowl(10)
      expect(game.score).toEqual(30)
    })
    it("calculate perfect game", function(){
      for (var i = 0; i < 10; i ++){
        game.currentFrame.firstBowl(10)
      }
      game.currentFrame.firstBowl(10)
      game.currentFrame.secondBowl(10)
      expect(game.score).toEqual(300)
    })
  })

  describe("spares", function() {
    it("adds bonus for spares", function() {
      game.currentFrame.firstBowl(7)
      game.currentFrame.secondBowl(3)
      game.currentFrame.firstBowl(2)
      game.currentFrame.secondBowl(2)
      expect(game.score).toEqual(16)
    })
  })

  describe("calculates scores correctly", function() {
    it("calculate 90 game", function(){
      for (var i = 0; i < 10; i ++){
        game.currentFrame.firstBowl(9)
        game.currentFrame.secondBowl(0)
      }
      expect(game.score).toEqual(90)
    })
    it("calculate 0 game", function(){
      for (var i = 0; i < 10; i ++){
        game.currentFrame.firstBowl(0)
        game.currentFrame.secondBowl(0)
      }
      expect(game.score).toEqual(0)
    })
  })

  xdescribe("finishes", function() {
    it("game over after 10 frames", function(){
      for (var i = 0; i < 10; i ++){
        game.currentFrame.firstBowl(9)
        game.currentFrame.secondBowl(0)
      }
      expect(function() { game.currentFrame.firstBowl(1) }).toThrow('game over')
    })
  })
});