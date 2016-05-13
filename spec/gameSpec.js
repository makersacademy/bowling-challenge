describe("Feature test:", function() {
  var game

  beforeEach(function() {
    game = new Game()
  })

  describe("score at start", function() {
    it("player has zero points when game starts", function() {
      expect(game.currentScore()).toEqual(0)
    })
  })


})
