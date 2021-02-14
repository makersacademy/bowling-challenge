"use strict";

describe("bowling game", function() {
  let game;
  let score;
  let strike = 10;

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
        it("changes the bowl", function() {
          expect(game.bowlNumber).toEqual(1);
          game.enterScore(score);
          expect(game.bowlNumber).toEqual(2);
        })
      })
      describe("when you get a strike", function() {
        it("Changes the frame", function() {
          expect(game.frameNumber).toEqual(1);
          game.enterScore(strike);
          expect(game.frameNumber).toEqual(2);
        })
        it("Leaves the bowl number as 1", function() {
          expect(game.bowlNumber).toEqual(1);
          game.enterScore(strike);
          expect(game.bowlNumber).toEqual(1);
        })
      })
    })
  })
})
