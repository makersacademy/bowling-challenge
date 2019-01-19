"use strict"

describe ("BowlingGame", function () {
  describe("Guttergame", function() {
    it("Player hits the gutter twice", function() {
      var bowlingGame = new BowlingGame();
      bowlingGame.rollOne(0)
      bowlingGame.rollTwo(0)
      expect(bowlingGame.score).toEqual(0)
    })
  })
})
