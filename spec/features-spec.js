"use strict";

describe("bowling-computer", function() {
  var myGame;
  beforeEach(function() {
    myGame = new Scorecard();
  });

  describe("Scorecard", function() {
    it("keeps a score", function() {
      myGame.sumPointsPerFrame(1,7);
      expect(myGame.score).toEqual(8);
    });

    it("progresses the frame if pinfall is 10", function() {
      myGame.sumPointsPerFrame(10,1);
      expect(myGame.frame).toEqual(2);
    });
  });
});
