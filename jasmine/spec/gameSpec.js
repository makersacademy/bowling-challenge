'use strict'

describe("Bowling Game", function() {
  var game

  beforeEach(function() {
    game = new Game()
  })

  describe("scores", function() {
    it("for a gutter game", function() {
      multipleRolls(0, 20)
      expect(game.result()).toEqual(0)
    })

    it("for a normal game without bonuses", function() {
      multipleRolls(1, 20)
      expect(game.result()).toEqual(20)
    })

    it("for a game with spares", function() {
      multipleRolls(5, 2)
      multipleRolls(1, 18)
      expect(game.result()).toEqual(29)
    })

    it("for a game with strikes", function() {
      game.roll(10)
      multipleRolls(3, 2)
      multipleRolls(0, 16)
      expect(game.result()).toEqual(22)
    })

    it("for a perfect game", function() {
      multipleRolls(10, 12)
      expect(game.result()).toEqual(300)
    })
  })
  var multipleRolls = function(roll, pins) {
    for (var i = 0; i < pins; i++) {
      game.roll(roll)
    }
  }
})
