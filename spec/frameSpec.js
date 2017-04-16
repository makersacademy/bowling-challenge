(function () {
   'use strict';
}());

describe("first frame", function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe("spare", function() {
    // As a bowler,
    // I want to do a spare on first frame,
    // so that I can score extra points
    it("scores 10 points at end of frame", function() {
      bowlingGame.firstShot(2);
      bowlingGame.secondShot(8);
      bowlingGame.calculateFrame1Score();
      expect(bowlingGame.frame1).toEqual([10])
    });
  });


});