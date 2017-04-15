"use strict";

describe("first frame", function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe("starting a new game", function() {
    // As a bowler,
    // I want to start a game of bowling,
    // so that I can get points
    it("gives a total of 0", function() {
      expect(bowlingGame.total).toEqual(0);
    });
    // As a bowler,
    // I want to have 2 shots,
    // so that I can complete a frame
    it("complete a frame", function() {
      bowlingGame.firstShot(2)
      bowlingGame.secondShot(4)
      expect(bowlingGame.total).toEqual(6)
    });
  });

  describe("starting with a spare shot", function() {
    // As a bowler,
    // I want to do a spare shot in my first frame
    // so that I can add an extra shot to my first frame
    it("saves the spare shot to be calculated with the next shot", function() {
      bowlingGame.firstShot(2)
      bowlingGame.secondShot(8)
      bowlingGame.currentSpareScore()
      expect(bowlingGame.spare).toBe(true)
    });
    // As a bowler,
    // I want to do a spare shot in my first frame
    // so that I can have extra points
    it("adds first shot points from second frame to spare from first", function() {
      bowlingGame.firstShot(2)
      bowlingGame.secondShot(8)
      bowlingGame.currentSpareScore()
      bowlingGame.firstShot(2)
      expect(bowlingGame.total).toEqual(12)
      bowlingGame.frameScoreReset;
    });
  });

  describe("starting with a strike shot", function() {
    // As a bowler,
    // I want to do a strike shot in my first frame
    // So that I can get double points on my next frame
    it("saves the strike shot to be calculated with the next 2 shots", function() {
      bowlingGame.firstShot(10)
      bowlingGame.currentStrikeScore()
      bowlingGame.firstShot(2)
      bowlingGame.firstShot(6)
      expect(bowlingGame.total).toEqual(18)
    });
  });
});