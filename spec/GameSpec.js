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
      spyOn(game,'bowl').and.returnValue(2)
      game.play()
      expect(game.scorecard[1]['remainingPins']).toEqual(8)
    })

    it("updates scorecard with score for the current frame", function () {
      spyOn(game,'bowl').and.returnValue(3)
      game.play()
      expect(game.scorecard[1]['frameScore']).toEqual(3)
    })

    it("adds bonus points to the frame where a strike was bowled", function () {
      spyOn(game,'bowl').and.returnValues(10, 3, 4)
      game.play()
      game.play()
      game.play()
      expect(game.scorecard[1]['frameScore']).toEqual(17)
    })

    it("adds bonus points to the frame where a spare was bowled", function () {
      spyOn(game,'bowl').and.returnValues(2, 8, 6, 3)
      game.play()
      game.play()
      game.play()
      game.play()
      expect(game.scorecard[1]['frameScore']).toEqual(16)
    })

    it("adds bonus points to previous two frames with two consecutive strikes", function () {
      spyOn(game,'bowl').and.returnValues(10, 10, 4, 5)
      game.play()
      game.play()
      game.play()
      game.play()
      expect(game.scorecard[1]['frameScore']).toEqual(24)
      expect(game.scorecard[2]['frameScore']).toEqual(19)
    })

  })

})
