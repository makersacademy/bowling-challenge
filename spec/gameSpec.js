"use strict";

describe("bowling game", function() {
  let game;
  let score;

  beforeEach(function() {
    game = new Game;
  })

  describe("entering scores", function() {
    describe("when it is the first bowl of a frame", function() {
      describe("when you enter a score of 0-9", function() {
        beforeEach(function() {
          score = 7;
        })
        it("changes the total score by that amount", function() {
          expect(game.totalScore).toEqual(0);
          game.enterScore(score);
          expect(game.totalScore).toEqual(score);
        })
        it("maintans the frame", function() {
          expect(game.frameNumber).toEqual(1);
          game.enterScore(score);
          expect(game.frameNumber).toEqual(1);
        })
      })
    })
  })
})
