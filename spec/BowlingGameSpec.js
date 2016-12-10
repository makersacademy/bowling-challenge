'use strict';

describe("BowlingGame", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new BowlingGame();
    frame = jasmine.createSpyObj('frame', ['testMethod']);
  });

  describe("properties", function() {

    it("can record frames played", function() {
      expect(game.framesInPlay).toEqual([]);
    });

    it("should record total score", function() {
      expect(game.totalScore).toEqual(0);
    });

    // it("should have a frameIndex to increment", function() {
    //   expect(game.frameIndex).toEqual(0);
    // });

  });

  describe("rolling a ball", function() {

    it("should create new frame on first roll", function() {
      game.roll(2);
      expect(game.framesInPlay).toEqual([frame]);
    });
  });



});
