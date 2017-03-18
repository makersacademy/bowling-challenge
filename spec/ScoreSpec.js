"use strict";

describe("Score", function() {
  var score;
  var game;
  var frame;

  beforeEach(function() {
    score = new Score();
    game = new Game();
    frame = new Frame();
  })

  it("starts the game with no score", function() {
    expect(score.runningScore).toEqual(0);
  })

  it("adds the score of the current frame", function() {
    spyOn(game, "play").and.returnValue([1, 1]);
    expect(score.calculateScore(game.play())).toEqual(2);

    expect(score.runningScore).toEqual(2);
  })

  // it("calculates the running score of the game", function(){
  //   spyOn(game, "play").and.returnValue([2, 5]);
  //   game.play();
  //   expect(score.runningScore()).toEqual(7);
  // })

});
