"use strict"

describe ("BowlingGame", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  })

  var rollX = function(pins, rolls) {
    for (var i = 0; i < rolls; i++)
    game.roll(pins)
  }

  describe ("Initialisation", function () {
  it ("creates a bowling game", function() {
    game
  })
})

  describe("Gutter game", function() {
    it("can roll a gutter game", function() {
      rollX(0, 20)
      expect(game.score()).toBe(0);
    })
  })

  describe("Specific scores", function() {
    it("Every pin is a 1", function() {
      rollX(1, 20)
      expect(game.score()).toBe(20)
    })

    it("Every pin is a 4", function() {
      rollX(4, 20)
      expect(game.score()).toBe(80)
    })
  })

})
