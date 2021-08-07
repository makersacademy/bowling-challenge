/* eslint-disable */

describe ("Game", () => {

  beforeEach(() => {
    game = new Game();
  })

  it ('inits with no frame obj,frame num set to 1, arrays of scores & past frames',
   () => {
    expect(game.currentFrameObj).toEqual(null)
    expect(game.currentFrameNum).toEqual(1)
    expect(game.scoresArray).toEqual([])
    expect(game.framesArray).toEqual([])
  })


})