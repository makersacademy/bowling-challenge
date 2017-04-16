(function () {
   'use strict';
}());

describe("Mid game", function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe("in a frame",function() {
    //As a bowler,
    //I want to fail my shots in a frame,
    //so that I can obtain 0 points for that frame
    it("obtain 0 points", function() {
      bowlingGame.firstShot(0)
      bowlingGame.secondShot(0)
      expect(bowlingGame.frameScore).toEqual(0)
    });
  });

});
