"use strict";

describe("Bowling", function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling("Bob");
  });

  describe("stores player name", function() {
    it("stores the player's name at start", function() {
      expect(bowling.playerName).toEqual("Bob");
    })
  });

  describe("play game", function() {
    it("rolls the ball twice in a frame with less than 10 pins down ", function() {
      spyOn(Math, "floor").and.returnValue(4);
      bowling.roll();
      bowling.roll();
      expect(bowling.score).toEqual(8);
    });

    it("resets the pins after a completed frame", function() {
      // to be define
    })

    it("increases the frameNumber after completing a frame", function() {
      bowling.roll();
      bowling.roll();
      expect(bowling.frameNumber).toEqual(2);
    });

    it("finishes the frame if the first roll is a strike", function() {
      spyOn(Math, "floor").and.returnValue(10);
      bowling.roll();
      expect(bowling.frameNumber).toEqual(2);
    });

    it("plays the gutter game", function() {
      spyOn(Math, "floor").and.returnValue(0);
      for (var i = 0; i < 20; i++) {
        bowling.roll();
      }
      expect(bowling.score).toEqual(0);
    });

    it("plays perfect game in case of strikes in each cases", function() {
      spyOn(Math, "floor").and.returnValue(10);
      for (var i = 0; i < 12; i++) {
        bowling.roll();
      }
      expect(bowling.score).toEqual(300);
    });

    it("plays all the 10 frames with 2 rolls if always 3 pins knocked down", function() {
      spyOn(Math, "floor").and.returnValue(3);
      for (var i = 0; i < 20; i++) {
        bowling.roll();
      }
      expect(bowling.score).toEqual(60);
    });

    it("plays 21 rolls with spare in each frame", function() {
      spyOn(Math, "floor").and.returnValue(5);
      for(var i = 0; i < 21; i++) {
        bowling.roll();
      }
      expect(bowling.score).toEqual(150);
    });

    it("raises error if there is no more frame left to play with", function() {
      spyOn(Math, "floor").and.returnValue(2);
      for (var i = 0; i < 20; i++) {
        bowling.roll();
      }
      expect(function() {
        bowling.roll();
      }).toThrowError("Game over. No more frame left.");

    })
  });

  describe("handle bonus scores", function() {
    it("adds bonus scores in case of a strike", function() {
      spyOn(Math, "floor").and.returnValue(10);
      for(var i = 0; i < 3; i++) {
        bowling.roll();
      }
      expect(bowling.score).toEqual(50);
    });

    it("add bonus scores in case of spares, in 2 frames", function() {
      spyOn(Math, "floor").and.returnValue(5);
      for (var i = 0; i < 4; i++) {
        bowling.roll();
      };
      expect(bowling.score).toEqual(25)
    });

    it("add bonus scores in case of spares, in 6 frames", function() {
      spyOn(Math, "floor").and.returnValue(5);
      for (var i = 0; i < 12; i++) {
        bowling.roll();
      }
      expect(bowling.score).toEqual(85);
    });
  });

  describe("handle the 10th frame", function() {
    it("lets user rolls 3 times in the 10th frame", function() {
      spyOn(Math, "floor").and.returnValue(5);
      for (var i = 0; i < 20; i++) {
        bowling.roll();
      };
      expect(bowling.frameNumber).toEqual(10);
      bowling.roll();
      expect(bowling.score).toEqual(150);
    })
  });
});
