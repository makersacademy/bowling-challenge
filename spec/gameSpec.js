/* eslint-disable */

describe ("Game", () => {

  beforeEach(() => {
    game = new Game();
  })

  it ('inits with no frame obj,frame num set to 1, arrays of scores & past frames',
   () => {
    expect(game.currentFrameObj).toEqual(null);
    expect(game.currentFrameNum).toEqual(1);
    expect(game.scoresArray).toEqual([]);
    expect(game.framesArray).toEqual([]);
  })

  it ('starting a new game sets current frame obj with round of 1', () => {
    game.startGame()
    expect(game.currentFrameObj).toBeInstanceOf(Frame)
    expect(game.currentFrameObj.round).toEqual(1)
  })


})