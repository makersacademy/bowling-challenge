describe("Feature test:", function() {
  var game

  beforeEach(function() {
    game = new Game()
  })

  describe("score at start", function() {
    it("player has zero points when game starts", function() {
      expect(game.cumulativeScore()).toEqual(0)
    })

    it("current frame number should be 1 at start", function() {
      expect(game.frameNumber()).toEqual(1)
    })

    it("return true for being first roll in a frame", function() {
      expect(game.isFirstRoll()).toBeTruthy()
    })
  })

  describe("first roll", function() {
    describe("when knock down three pins", function() {
      it("adds 3 to score", function() {
        game.roll(3)
        expect(game.cumulativeScore()).toEqual(3)
      })

      it("return false for being first roll in a frame", function() {
        game.roll(3)
        expect(game.isFirstRoll()).toBeFalsy()
      })
    })

    describe("when knock down 10 pins", function() {
      it("add 10 to score", function() {
        game.roll(10)
        expect(game.cumulativeScore()).toEqual(10)
      })

      it("return true for being first roll in a frame", function() {
        game.roll(10)
        expect(game.isFirstRoll()).toBeTruthy()
      })

      it("return 2 for frame number", function() {
        game.roll(10)
        expect(game.frameNumber()).toEqual(2)
      })

      it("returns 2 bonus rolls if get a strike", function() {
        game.roll(10)
        expect(game.bonusRolls()).toEqual(2)
      })
    })
  })

})
