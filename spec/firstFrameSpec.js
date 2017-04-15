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

    // As a bowler,
    // I want to do a strike shot in my first frame
    // So that I can get double points on my next frame
    it("starts with a strike shot", function() {
      bowlingGame.firstShot(10)
      bowlingGame.currentStrikeScore()
      expect(bowlingGame.strike).toBe(true)
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

  });

});