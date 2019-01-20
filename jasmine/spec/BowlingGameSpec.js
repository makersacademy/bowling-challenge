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

  describe("Specific scores", function() {
    it("Every pin is a 1", function() {
      var game = new BowlingGame();
      for (var i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score()).toBe(20)
    })

    it("Every pin is a 4", function() {
      var game = new BowlingGame();
      for (var i = 0; i < 20; i++) {
        game.roll(4);
      }
      expect(game.score()).toBe(80)
    })
  })

})
