describe("Feature test:", function() {
  var game

  beforeEach(function() {
    game = new Game()
  })

  describe("start the game", function() {
    it("with a cumulative score of zero,", function() {
      expect(game.cumulativeScore()).toEqual(0)
    })
  })

  describe("first roll", function() {
    describe("when knock down 3 pins,", function() {
      it("increases cumulative score by 3", function() {
        game.knockDown(3)
        expect(game.cumulativeScore()).toEqual(3)
      })
    })
  })



})
