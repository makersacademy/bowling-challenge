'use strict';

describe('Feature', function() {
  var game;
  var frame;
  var score;

  describe("updating the first frame into the game", () => {
    frame = new Frame();
    frame.firstRoll = 5;
    frame.updatePinBoard(frame.firstRoll);
    frame.secondRoll = 4;
    frame.updatePinBoard(frame.secondRoll);
    game = new Game();
    game.updateFramesArray(frame.pinBoard);
    score = new Score();
    var firstScore = score.calculateFrameScore(frame.pinBoard);
    game.updateFrameScores(firstScore);
    console.log('frame scores are...')
    console.log(game.frameScores);
    console.log('frame pins are...')
    console.log(game.frames)
    
  });
});