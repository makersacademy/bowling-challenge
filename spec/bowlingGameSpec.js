'use strict';

describe("BowlingGame", function () {
  var bowlingGame;
  var frame;

  beforeEach(function() {
    frame = new Frame();
    bowlingGame = new BowlingGame();
  });
  
  describe('recordFrame', function () {

    it("records the frame object", function () {
      bowlingGame.frame.roll(1)
      bowlingGame.frame.roll(2)
      bowlingGame.recordFrame();
      expect(bowlingGame.frames.length).toEqual(1);
    });

  });

});