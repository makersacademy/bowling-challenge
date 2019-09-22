'use strict';

describe('Bowling', function() {
  var bowlingGame;
  var frameScore;

  beforeEach(function() {
    bowlingGame = new BowlingGame("James");
    frameScore = new BowlingScore(10, 10);
  });

  it("it stores my name in the game", function(){
    expect(bowlingGame.playerName).toEqual("James");
  });

  it("it stores a frame score", function(){
    bowlingGame.recordScore(frameScore);
    expect(bowlingGame.frameScores).toEqual([frameScore]);
  });

  it("it stores current frame", function(){
    expect(bowlingGame.currentFrame).toEqual(1);
    bowlingGame.nextFrame();
    expect(bowlingGame.currentFrame).toEqual(2);
  });
});
