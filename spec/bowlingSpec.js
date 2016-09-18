"use strict";

describe("Bowling", function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling("Bob");
  });

  describe("stores player name", function() {
    it("it stores the player's name at start", function() {
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

    it("it increases the frameNumber after completing a frame", function() {
      bowling.roll();
      bowling.roll();
      expect(bowling.frameNumber).toEqual(2);
    });

    it("finishes the frame if the first roll is a strike", function() {
      spyOn(Math, "floor").and.returnValue(10);
      bowling.roll();
      expect(bowling.frameNumber).toEqual(2);
    });
  });

  describe("handle bonus scores", function() {
    it("adds bonus scores in case of a strike", function() {
      spyOn(Math, "floor").and.returnValue(10);
      bowling.roll();
      bowling.roll();
      expect(bowling.score).toEqual(30);
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

});
