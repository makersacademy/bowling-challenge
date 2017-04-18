describe("Game test:", function() {
  var game

  beforeEach(function() {
    game = new Game()
  })

  describe("score at start", function() {
    it("player has zero points when game starts", function() {
      expect(game.cumulativeScore()).toEqual(0)
    })
  })

  describe("first roll", function() {
    it("increases cumulative score", function() {
      spyOn(game._frame,"score").and.returnValue(3);
      game.knockDown(3)
      expect(game.cumulativeScore()).toEqual(3)
    })
  })

})
