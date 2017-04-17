(function () {
   'use strict';
}());

describe("bowling game", function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe("on start", function() {
    // As a bowler,
    // I want to start a game of bowling,
    // so that I can get points
    it("score starts at 0", function() {
      expect(bowlingGame.total).toEqual(0);
    });
  });

  describe("adding scores to frame 1", function() {
    // As a bowler,
    // I want to knock some pins on my first shot
    // so that I can get some points
    it("on first frame shot", function() {
      bowlingGame.firstShot(2);
      expect(bowlingGame.firstScore).toEqual(2)
    });

    it("ending frame shot", function() {
      bowlingGame.secondShot(4);
      expect(bowlingGame.secondScore).toEqual(4)
    });

  });

  describe("scores in a frame", function() {
    // As a bowler,
    // I want to do a spare shot in a frame
    // so that I can add an extra score to this frame
    it("make a spare", function() {
      bowlingGame.firstShot(2);
      bowlingGame.secondShot(8);
      expect(bowlingGame.spare).toBe(true)
    });

    // As a bowler,
    // I want to do a strike shot in my first frame
    // So that I can get double points on my next frame
    it("make a strike", function() {
      bowlingGame.firstShot(10);
      expect(bowlingGame.strike).toBe(true)
    });
  });

  describe("complete frame", function() {
    // As a bowler,
    // I take both shots
    // so that I can complete a frame
    it("when reaching score of 10", function() {
      bowlingGame.firstShot(2);
      bowlingGame.secondShot(4);
      expect(bowlingGame.frames[0].Score).toEqual(6)
    });
  });

});