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

    it("should add new frame on first roll", function() {
      game.roll(2);
      expect(game.framesInPlay.length).toEqual(1);
    });

    it("should add a second frame after two balls have been thrown", function() {
      game.roll(2);
      game.roll(5);
      expect(game.framesInPlay.length).toEqual(2);
    });
    
  });



});
