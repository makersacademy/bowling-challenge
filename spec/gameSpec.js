"use strict";

describe("bowling game", () => {
  let game;
  const score = 5;
  const strike = 10;

  beforeEach(() => {
    game = new Game;
  })

  describe("entering scores", () => {
    describe("when it is the first bowl of a frame", () => {
      describe("when you enter a score of 0-9", () => {
        it("changes the total score by that amount", () => {
          expect(game.totalScore).toEqual(0);
          game.enterScore(score);
          expect(game.totalScore).toEqual(score);
        })
        it("maintans the frame", () => {
          expect(game.frameNumber).toEqual(1);
          game.enterScore(score);
          expect(game.frameNumber).toEqual(1);
        })
        it("changes the bowl", () => {
          expect(game.bowlNumber).toEqual(1);
          game.enterScore(score);
          expect(game.bowlNumber).toEqual(2);
        })
      })
      describe("when you get a strike", () => {
        it("Changes the frame", () => {
          expect(game.frameNumber).toEqual(1);
          game.enterScore(strike);
          expect(game.frameNumber).toEqual(2);
        })
        it("Leaves the bowl number as 1", () => {
          expect(game.bowlNumber).toEqual(1);
          game.enterScore(strike);
          expect(game.bowlNumber).toEqual(1);
        })
        it("initially increases the score by 10", () => {
          expect(game.totalScore).toEqual(0);
          game.enterScore(strike);
          expect(game.totalScore).toEqual(10);
        })
        it("adds the next two bowls twice, once as a bonus", () => {
          expect(game.totalScore).toEqual(0);
          game.enterScore(strike);
          expect(game.totalScore).toEqual(10);
          game.enterScore(score)
          expect(game.totalScore).toEqual(10 + 2 * score);
          game.enterScore(score)
          expect(game.totalScore).toEqual(10 + 4 * score);
        })
      })
    })
  })
})
