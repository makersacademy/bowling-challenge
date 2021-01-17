'use strict';

describe('Feature', function() {
  var game;
  var frame;
  var score;

  describe("first round", () => {
    it("should return ")
    console.log("first round")
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
    console.log(game.frameScores);
    console.log("second round")
    var frame2 = new Frame();
    frame2.firstRoll = 6;
    frame2.updatePinboard(frame2.firstRoll);
    frame2.secondRoll= 4;
    frame2.updatePinboard(frame2.secondRoll);
    game.updateFramesArray(frame2.pinboard);
    var secondScore = score.calculateFrameScore(frame2.pinboard);
    // game.updateFrameScores(secondScore);
    console.log(game.frameScores);
    game.updatePreviousScore(1);
    console.log(game.frameScores);
    //3rd round
    console.log("third round")
    var frame3 = new Frame();
    frame3.firstRoll = 3;
    frame3.updatePinboard(frame3.firstRoll);
    frame3.secondRoll= 5;
    frame3.updatePinboard(frame3.secondRoll);
    game.updateFramesArray(frame3.pinboard);
    var thirdScore = score.calculateFrameScore(frame3.pinboard);
    // game.updateFrameScores(thirdScore);
    console.log(game.frames);
    console.log(game.frameScores);
    game.updatePreviousScore(2);
    // console.log(game.updatePreviousScore(2))
    console.log(game.frameScores);
    //4th round
    console.log("fourth round")
    var frame4 = new Frame();
    frame4.firstRoll = 10;
    frame4.updatePinboard(frame4.firstRoll);
    frame4.secondRoll= 0;
    frame4.updatePinboard(frame4.secondRoll);
    game.updateFramesArray(frame4.pinboard);
    var thirdScore = score.calculateFrameScore(frame4.pinboard);
    // game.updateFrameScores(thirdScore);
    console.log(game.frames);
    console.log(game.frameScores);
    game.updatePreviousScore(3);
    // console.log(game.updatePreviousScore(2))
    console.log(game.frameScores);
    console.log("fifth round")
    var frame5 = new Frame();
    frame5.firstRoll = 3;
    frame5.updatePinboard(frame5.firstRoll);
    frame5.secondRoll= 4;
    frame5.updatePinboard(frame5.secondRoll);
    game.updateFramesArray(frame5.pinboard);
    var thirdScore = score.calculateFrameScore(frame5.pinboard);
    // game.updateFrameScores(thirdScore);
    console.log(game.frames);
    console.log(game.frameScores);
    game.updatePreviousScore(4);
    // console.log(game.updatePreviousScore(2))
    console.log(game.frameScores);


  });
});