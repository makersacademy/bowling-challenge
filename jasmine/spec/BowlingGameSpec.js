"use strict"

describe ("BowlingGame", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  })


  describe ("Initialisation", function () {
  it ("creates a bowling game", function() {
    game
  })
})

  describe("Gutter game", function() {
    it("can roll a gutter game", function() {
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toBe(0);
    })
  })

  describe("Specific scores", function() {
    it("Every pin is a 1", function() {
      for (var i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score()).toBe(20)
    })

    it("Every pin is a 4", function() {
      for (var i = 0; i < 20; i++) {
        game.roll(4);
      }
      expect(game.score()).toBe(80)
    })
  })

})
