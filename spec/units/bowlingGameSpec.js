/* eslint-disable strict */
var BowlingGame = require("../../src/BowlingGame.js");

describe("BowlingGame", function() {
  var bowlingGame;

  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score);
    }
  };

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it("Start of all games has score of 0, frame of 0, rollNum 0, and is not complete", function() {
    expect(bowlingGame.runningTotal).toEqual(0);
    expect(bowlingGame.frame).toEqual(0);
    expect(bowlingGame.rollNum).toEqual(0);
    expect(bowlingGame.isComplete).toEqual(false);
    expect(bowlingGame.scoreCard.length).toEqual(0);
  });

  it("gutter game", function() {
    rolls(0, 20);
    expect(bowlingGame.runningTotal).toEqual(0);
    expect(bowlingGame.frame).toEqual(10);
    expect(bowlingGame.rollNum).toEqual(2);
    expect(bowlingGame.turn).toEqual(20);
  });

  it("gutter game is not complete until final roll", function() {
    rolls(0, 19);
    expect(bowlingGame.isComplete).toEqual(false);
    rolls(0, 1);
    expect(bowlingGame.isComplete).toEqual(true);
  });

  it("perfect game", function() {
    rolls(10, 12);
    expect(bowlingGame.runningTotal).toEqual(300);
    expect(bowlingGame.frame).toEqual(10);
    expect(bowlingGame.rollNum).toEqual(3);
    expect(bowlingGame.turn).toEqual(12);
  });

  it("perfect game is not complete until final roll", function() {
    rolls(10, 11);
    expect(bowlingGame.isComplete).toEqual(false);
    rolls(10, 1);
    expect(bowlingGame.isComplete).toEqual(true);
  });

  it("game with spares", function() {
    rolls(5, 21);
    expect(bowlingGame.runningTotal).toEqual(150);
    expect(bowlingGame.frame).toEqual(10);
    expect(bowlingGame.rollNum).toEqual(3);
    expect(bowlingGame.turn).toEqual(21);
  });

  it("spare game is not complete until final roll", function() {
    rolls(5, 20);
    expect(bowlingGame.isComplete).toEqual(false);
    rolls(5, 1);
    expect(bowlingGame.isComplete).toEqual(true);
  });

  it("New roll is not included if game is complete", function() {
    rolls(0, 20);
    rolls(1, 1);
    expect(bowlingGame.runningTotal).toEqual(0);
  });
});
