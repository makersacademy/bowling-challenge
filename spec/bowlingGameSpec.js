(function () {
   'use strict';
}());

describe("bowling game", function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe("rules", function() {
    // As a bowler,
    // I want to follow bowling game rules,
    // so that I can finish my game after 10 frames
    it("has 10 frames", function() {
      expect(bowlingGame.frames.length).toEqual(10);
    });
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
      expect(bowlingGame.frames[0].firstShotScore).toEqual(2)
    });

    it("ending frame shot", function() {
      bowlingGame.secondShot(4);
      expect(bowlingGame.frames[0].secondShotScore).toEqual(4)
    });

    it("updates a total at end of frame", function() {
      bowlingGame.firstShot(2);
      bowlingGame.secondShot(6);
      expect(bowlingGame.total).toEqual(8);
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



  // describe("complete frame", function() {
  //   // As a bowler,
  //   // I reach a score of 10
  //   // so that I can complete a frame
  //   it("when reaching score of 10", function() {
  //     bowlingGame.firstShot(2);
  //     bowlingGame.secondShot(8);
  //     expect(bowlingGame.frameComplete).toBe(true)
  //   });
  // });

});