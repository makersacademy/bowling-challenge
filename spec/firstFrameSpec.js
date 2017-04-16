(function () {
   'use strict';
}());

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
    // I want to do a spare shot in my first frame
    // so that I can have extra points
    xit("adds first shot points from second frame to spare from first", function() {
      bowlingGame.firstShot(2)
      bowlingGame.secondShot(8)
      bowlingGame.currentSpareScore()
      bowlingGame.firstShot(2)
      expect(bowlingGame.total).toEqual(12)
      bowlingGame.frameScoreReset;
    });
  });
});