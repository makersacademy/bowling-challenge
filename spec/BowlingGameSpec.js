'use strict'

describe("A game", () => {

  let game

  beforeEach(function(){
    game = new BowlingGame()
  })

  it("calculates a gutter game", () => {
    generateFrames([0,0])
    expect(game.scoreGame()).toEqual(0)
  })

  it("calculates a standard game", () => {
    generateFrames([1,3])
    expect(game.scoreGame()).toEqual(40)
  })

  it("calculates a game with spares", () => {
    generateFrames([5,5], [5,5,5])
    expect(game.scoreGame()).toEqual(150)
  })

  it("calculates a game with strikes", () => {
    generateFrames([10], [10,10,10])
    expect(game.scoreGame()).toEqual(300)
  })

  function generateFrames(frame, final_frame) {
    for(var i = 0; i < 9; i++) {
      game.bowl(frame)
    }

    game.bowl(final_frame || frame)
  }
})
