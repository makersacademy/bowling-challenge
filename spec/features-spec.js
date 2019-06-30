"use strict";

describe("bowling-computer", function() {
  var myGame;
  beforeEach(function() {
    myGame = new Scorecard();
  });

  describe("Scorecard", function() {
    it("keeps a score", function() {
      myGame.sumPointsPerFrame(1);
      myGame.sumPointsPerFrame(7);
      expect(myGame.score).toEqual(8);
    });

    it("progresses the frame if pinfall is 10", function() {
      myGame.sumPointsPerFrame(10);
      expect(myGame.frame).toEqual(2);
    });

    it("does not progress the frame if pinfall is 5", function() {
      myGame.sumPointsPerFrame(5);
      expect(myGame.frame).toEqual(1);
    });

    it("returns the final score", function() {
      for (var i = 0; i < 10; i++) {
        myGame.sumPointsPerFrame(5);
        myGame.sumPointsPerFrame(0);
      }
      expect(myGame.score).toEqual(50);
    });
  });
});
