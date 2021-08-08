/* eslint-disable */

describe ("Game", () => {

  beforeEach(() => {
    game = new Game();
  });
  describe (".new", () => {

    it ('inits with no frame obj,frame num set to 1, arrays of scores & past frames',
    () => {
      expect(game.currentFrameObj).toEqual(null);
      expect(game.currentFrameNum).toEqual(1);
      expect(game.scoresArray).toEqual([]);
      expect(game.framesArray).toEqual([]);
    });

    it ('starting a new game sets current frame obj with round of 1', () => {
      game.startGame()
      expect(game.currentFrameObj).toBeInstanceOf(Frame)
      expect(game.currentFrameObj.round).toEqual(1)
    });
  });

  describe ('.rolls', () => {

    it ('rolls passes them to score correctly', () => { 
      game.startGame()
      game.firstRoll(4)
      game.secondRoll(3)
      expect(game.currentFrameObj.score.firstRollPins).toEqual(4)
      expect(game.currentFrameObj.score.secondRollPins).toEqual(3)
    });
  });

  describe ('.endFrame', () => {

    it ('end frames increments round num, stores old round & creates new round', () => {
      game.startGame()
      game.firstRoll(4)
      game.secondRoll(3)
      var oldRound = game.currentFrameObj
      game.endFrame()
      expect(game.currentFrameNum).toEqual(2)
      expect(game.scoresArray[0]).toEqual(7);
      expect(game.framesArray).toContain(jasmine.objectContaining(oldRound));
      expect(game.currentFrameObj).toBeInstanceOf(Frame);
      expect(game.currentFrameObj).not.toEqual(oldRound);
    });

    it ('triggers game to finish when 10th frame is ended', () => {
      game.startGame()
      Array.from(Array(10).keys()).forEach(function(i) {
        rollASeven();
      });
      expect(game.scoresArray).toEqual([7,7,7,7,7,7,7,7,7,7]);
      expect(game.finished).toEqual(true);
    });
  });

  describe (".calculate score", () => {
    it ('calculates strike correctly', () => { 
      game.startGame();
      game.firstRoll(10);
      game.secondRoll(0);
      game.endFrame();
      expect(game.scoresArray).toEqual([0])
      rollASeven();
      expect(game.scoresArray).toEqual([17,7]);
    });

    it ('calculates final round strike correctly', () => {
      game.startGame()
      Array.from(Array(9).keys()).forEach(function(i) {
        rollASeven();
      });
      game.firstRoll(10);
      game.secondRoll(0);
      console.log(game.currentFrameObj)
      game.endFrame();
      console.log(game.currentFrameObj)
      game.firstRoll(3);
      game.secondRoll(4);
      game.endFrame();
      expect(game.scoresArray).toEqual([7,7,7,7,7,7,7,7,7,17]);

      expect(game.finished).toEqual(true);
    });

    xit ('calculates final round spare correctly', () => {
      game.startGame()
      Array.from(Array(10).keys()).forEach(function(i) {
        rollASeven();
      });
      expect(game.scoresArray).toEqual([7,7,7,7,7,7,7,7,7,7]);
      expect(game.finished).toEqual(true);
    });
  });



})