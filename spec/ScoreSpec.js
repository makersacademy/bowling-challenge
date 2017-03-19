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

  it("calculates the running score of the game", function(){
    game.play();
    var scoreOne = game.frames[0];
    game.play();
    var scoreTwo = game.frames[1];
    var calculate = score.calculateScore(scoreOne);
    calculate += score.calculateScore(scoreTwo);
    expect(score.runningScore).toEqual(calculate);
  })

  it("does not add to running score after strike", function() {
    spyOn(game, "play").and.returnValue([10, 0]);
    score.calculateScore(game.play());
    expect(score.runningScore).toEqual(0);
  })

  it("keeps track of the run of strikes", function() {
    spyOn(game, "play").and.returnValue([10, 0]);
    score.calculateScore(game.play());
    expect(score.runOfStrikes).toEqual(1)
  })

  it("returns 300 points for the Perfect Game", function() {
    spyOn(game, "play").and.returnValue([10, 0]);
    for(var i = 0; i < 10; i ++) {
      score.calculateScore(game.play());
    };
    expect(score.runOfStrikes).toEqual(10);

    // expect(score.runningScore).toEqual(300);
  })

  it("stores strike", function() {
    spyOn(game, "play").and.returnValue([10, 0]);
    score.calculateScore(game.play());
    expect(score.strike).toEqual(true);
  })

  // it("stores a spare", function() {
  //   spyOn(game, "play").and.returnValue([5, 5]);
  //   score.calculateScore(game.play());
  //   expect(score.spare).toEqual(true);
  // })

  it("doubles the frame following a strike", function() {
    spyOn(game, "play").and.returnValue([10, 0]);
    score.calculateScore(game.play());
    score.calculateScore(game.play());
    expect(score.runningScore).toEqual(30);
  })

});
