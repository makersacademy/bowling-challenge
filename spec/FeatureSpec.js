'use strict';

describe('Feature', function() {
  var game;
  var frame;
  var score;

  describe("updating the first frame into the game", () => {
    frame = new Frame();
    frame.firstRoll = 5;
    frame.updatePinboard(frame.firstRoll);
    frame.secondRoll = 4;
    frame.updatePinboard(frame.secondRoll);
    game = new Game();
    game.updateFramesArray(frame.pinboard);
    score = new Score();
    var firstScore = score.calculateFrameScore(frame.pinboard);
    game.updateFrameScores(firstScore);
    //2nd round
    var frame2 = new Frame();
    frame2.firstRoll = 6;
    frame2.updatePinboard(frame2.firstRoll);
    frame2.secondRoll= 4;
    frame2.updatePinboard(frame2.secondRoll);
    game.updateFramesArray(frame2.pinboard);
    var secondScore = score.calculateFrameScore(frame2.pinboard);
    game.updateFrameScores(secondScore);
    console.log(game.frames);
    console.log(game.frameScores);
    game.updatePreviousScore(1);
    console.log(game.updatePreviousScore(1))
    console.log(game.frameScores);
    //3rd round
    var frame3 = new Frame();
    frame3.firstRoll = 3;
    frame3.updatePinboard(frame3.firstRoll);
    frame3.secondRoll= 5;
    frame3.updatePinboard(frame3.secondRoll);
    game.updateFramesArray(frame3.pinboard);
    var thirdScore = score.calculateFrameScore(frame3.pinboard);
    game.updateFrameScores(thirdScore);
    console.log(game.frames);
    console.log(game.frameScores);
    game.updatePreviousScore(2);
    console.log(game.updatePreviousScore(2))
    console.log(game.frameScores);


  });
});