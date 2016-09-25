"use strict";

describe("Bowling", function() {

  var bowling;
  var frame;

  beforeEach(function() {
    frame = jasmine.createSpyObj("frame", ["isFrameOver", "setFrameNumber", "roll", "isSecondRoll", "isBonunsRollInLastFrame"]);
    bowling = new Bowling("Bob", frame);
    frame.isFrameOver.and.returnValue(false);
    frame.isBonunsRollInLastFrame.and.returnValue(false);
    frame.isSecondRoll.and.returnValue(false);
  });

  describe("stores player name", function() {
    it("stores the player's name at start", function() {
      expect(bowling.playerName).toEqual("Bob");
    })
  });

  describe("play game", function() {
    it("if a frame is finished, the frameNumber is increased in the following frame", function() {
      frame.roll.and.returnValue(3);
      bowling.roll();
      bowling.roll();
      frame.isFrameOver.and.returnValue(true);
      bowling.roll();
      expect(bowling.frameNumber).toEqual(2);
    });

    it("plays the gutter game", function() {
      frame.roll.and.returnValue(0);
      for (var i = 0; i < 10; i++) {
        bowling.roll();
        frame.isFrameOver.and.returnValue(false);
        bowling.roll();
        frame.isFrameOver.and.returnValue(true);
      }
      expect(bowling.score).toEqual(0);
      expect(bowling.frameNumber).toEqual(10);
    });

    it("plays perfect game in case of strikes in each cases", function() {
      frame.roll.and.returnValue(10);
      for (var i = 0; i < 9; i++) {
        bowling.roll();
        frame.isFrameOver.and.returnValue(true);
      }
      bowling.roll();
      frame.isFrameOver.and.returnValue(false);
      bowling.roll();
      frame.isBonunsRollInLastFrame.and.returnValue(true);
      bowling.roll();
      expect(bowling.score).toEqual(300);
    });

    it("plays all the 10 frames with 2 rolls if always 3 pins knocked down", function() {
      frame.roll.and.returnValue(3);
      for (var i = 0; i < 10; i++) {
        bowling.roll();
        frame.isFrameOver.and.returnValue(false);
        bowling.roll();
        frame.isFrameOver.and.returnValue(true);
      }
      expect(bowling.frameNumber).toEqual(10);
    });

    it("collects 60 scores with 2 rolls if always 3 pins knocked down", function() {
      frame.roll.and.returnValue(3);
      for (var i = 0; i < 10; i++) {
        bowling.roll();
        frame.isFrameOver.and.returnValue(false);
        bowling.roll();
        frame.isFrameOver.and.returnValue(true);
      }
      expect(bowling.score).toEqual(60);
    });

    it("raises error if there is no more frame left to play with", function() {
      frame.roll.and.returnValue(2);
      for (var i = 0; i < 10; i++) {
        bowling.roll();
        frame.isFrameOver.and.returnValue(false);
        bowling.roll();
        frame.isFrameOver.and.returnValue(true);
      }
      expect(function() {
        bowling.roll();
      }).toThrowError("Game over. No more frame left.");
    });

    it("plays 21 rolls with spare in each frame", function() {
      frame.roll.and.returnValue(5);
      for(var i = 0; i < 10; i++) {
        bowling.roll();
        frame.isSecondRoll.and.returnValue(true);
        frame.isFrameOver.and.returnValue(false);
        bowling.roll();
        frame.isFrameOver.and.returnValue(true);
        frame.isSecondRoll.and.returnValue(false);
      }
      frame.isFrameOver.and.returnValue(false);
      bowling.roll();
      expect(bowling.score).toEqual(150);
    });
  });

  describe("handle bonus scores", function() {
    it("adds bonus scores in case of a strike", function() {
      frame.roll.and.returnValue(10);
      for(var i = 0; i < 3; i++) {
        bowling.roll();
        frame.isFrameOver.and.returnValue(true);
      }
      expect(bowling.score).toEqual(50);
    });

    it("adds bonus scores in case of spares, in 2 frames", function() {
      frame.roll.and.returnValue(5);
      for (var i = 0; i < 2; i++) {
        bowling.roll();
        frame.isSecondRoll.and.returnValue(true);
        frame.isFrameOver.and.returnValue(false);
        bowling.roll();
        frame.isFrameOver.and.returnValue(true);
        frame.isSecondRoll.and.returnValue(false);
      };
      expect(bowling.score).toEqual(25);
    });

    it("adds bonus scores in case of spares, in 6 frames", function() {
      frame.roll.and.returnValue(5);
      for (var i = 0; i < 6; i++) {
        frame.isSecondRoll.and.returnValue(true);
        bowling.roll();
        frame.isFrameOver.and.returnValue(false);
        frame.isSecondRoll.and.returnValue(false);
        bowling.roll();
        frame.isFrameOver.and.returnValue(true)
      }
      expect(bowling.score).toEqual(85);
    });
  });
});
