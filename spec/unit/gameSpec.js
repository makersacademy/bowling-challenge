'use strict'

describe("Game", function() {
  var game
  var round

  beforeEach(function() {
    game = new Game()
  })

  describe("#newRound", function()  {
    it("starts a new round", function() {
      expect(game.roundCount).toEqual(1)
      game.newRound()
      expect(game.roundCount).toEqual(2)
    })
  })

})
