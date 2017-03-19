'use strict'

describe("Game", function() {
  var game = new Game()

  beforeEach(function() {
    game = new Game()
  })

  it("allows players to enter roll scores to frame", function() {
    game.enterRoll(3)
    game.enterRoll(5)
    expect(game.frame).toEqual([3, 5])
  })

  it("keeps a record of all frames played", function () {
    game.recordFrames([4, 5])
    game.recordFrames([10])
    expect(game.allFrames).toEqual([[4, 5], [10]])
  })

  it("restricts maximum points per roll to 10", function () {
    expect(function(){
      game.enterRoll(11)
    }).toThrowError("You cannot exceed 10 points per roll")
  })

  it("restricts maximum points per frame to 10", function () {
    game.enterRoll(5)
    expect(function () {
      game.enterRoll(6)
    }).toThrowError("You cannot exceed 10 points per frame")
  })
})
