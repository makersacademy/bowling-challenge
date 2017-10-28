describe("Game", function () {

  beforeEach(function () {
    game = new Game()
  })

  it("stores current frame being played", function () {
    expect(game.currentFrame).toEqual(1)
  })

  it("stores current roll being played", function () {
    expect(game.currentRoll).toEqual(1)
  })

  describe("play", function () {

    it("updates scorecard with number of pins hit", function () {
      spyOn(game,'bowl').and.returnValue(3)
      game.play()
      expect(game.scorecard[1][1]['hitPins']).toEqual(3)
    })

    it("updates scorecard with number of remaining pins in current frame", function () {
      spyOn(game,'bowl').and.returnValue(3)
      game.play()
      expect(game.scorecard[1]['remainingPins']).toEqual(7)
    })

    it("updates scorecard with score for the current frame", function () {
      spyOn(game,'bowl').and.returnValue(3)
      game.play()
      expect(game.scorecard[1]['frameScore']).toEqual(3)
    })

  })

})
