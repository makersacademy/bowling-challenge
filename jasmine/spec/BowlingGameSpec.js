"use strict"

describe ("BowlingGame", function() {

  describe ("Initialisation", function () {
  it ("creates a bowling game", function() {
    var game = new BowlingGame();
  })
})

  describe("Gutter game", function() {
    it("can roll a gutter game", function() {
      var game = new BowlingGame();
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toBe(0);
    })
  })

})
