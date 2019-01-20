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

//   describe ("Initialisation", function () {
//   it ("creates a bowling game", function() {
//     game
//   })
// })

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

  describe("A strike can be rolled", function() {
    it("rolls a 10, then doubles the next frame", function() {
      game.roll(10);
      game.roll(3);
      game.roll(6);
      rollX(0, 16);
      expect(game.score()).toBe(28)
    })
    it("rolls a 10, then gutters everything else", function() {
      game.roll(10);
      rollX(0, 18);
      expect(game.score()).toBe(10)
    })
  })

  describe("A spare can be rolled", function() {
    it("rolls a spare frame, then doubles the next roll", function() {
    game.roll(5);
    game.roll(5);
    game.roll(9);
    rollX(0, 17);
    expect(game.score()).toBe(28)
    })
  })

  describe("A perfect game can be rolled", function() {
    it("rolls 12 strikes and generates a score of 300", function() {
      rollX(10, 12);
      expect(game.score()).toBe(300)
    })
  })

})
