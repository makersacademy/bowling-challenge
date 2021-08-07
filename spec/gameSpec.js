/* eslint-disable */

describe ("Game", () => {

  beforeEach(() => {
    game = new Game();
  })
  describe ("#new", () => {

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

    it ('rolls passes them to score correctly', () => { 
      game.startGame()
      game.firstRoll(4)
      game.secondRoll(3)
      console.log(game.currentFrameObj)
      expect(game.currentFrameObj.score.firstRollPins).toEqual(4)
      expect(game.currentFrameObj.score.secondRollPins).toEqual(3)
    })
  })


})