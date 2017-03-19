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

  describe("stores high scoring status", function() {

    it("stores strike", function() {
      spyOn(game, "play").and.returnValue([10, 0]);
      score.calculateScore(game.play());
      expect(score.strike).toEqual(true);
    })

    it("stores a spare", function() {
      spyOn(game, "play").and.returnValue([5, 5]);
      score.calculateScore(game.play());
      expect(score.spare).toEqual(true);
    })

    it("shows strike as false when no strike is scored", function() {
      spyOn(game, "play").and.returnValue([5, 0]);
      score.calculateScore(game.play());
      expect(score.strike).toEqual(false);
    })

  })

  describe("gives bonus points for strikes and spares", function() {

    it("doubles the frame following a strike", function() {
      spyOn(game, "play").and.returnValue([10, 0]);
      score.calculateScore(game.play());
      score.calculateScore(game.play());
      expect(score.runningScore).toEqual(30);
    })

    it("doubles the bowl following a spare", function() {
      spyOn(game, "play").and.returnValue([5, 5]);
      score.calculateScore(game.play());
      score.calculateScore(game.play());
      expect(score.runningScore).toEqual(25);
    })

  });

});
