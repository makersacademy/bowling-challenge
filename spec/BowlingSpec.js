// var Bowling = require('../src/bowling.js');

describe("Bowling", function() {
  var game;

  beforeEach(function() {
    game = new Bowling();
  });

  it ("should have a total score of 0 upon initialization of the game", function() {
    expect(game.totalScore()).toEqual(0)
  });

  it ("should have a total score of 7 in the first frame after a first roll of 7 pins", function() {
    game.roll(7)
    expect(game.totalScore()).toEqual(7)
    expect(game.frameNum()).toEqual(1)
  });

  it ("should have a total score of 9 in the first frame after a first roll of 7 pins", function() {
    game.roll(7)
    expect(game.totalScore()).toEqual(7)
    expect(game.frameNum()).toEqual(1)
  });

  it ("should have a total of 9 after 7 then 2 pins knocked down in first frame and move to second frame", function() {
    game.roll(7,2)
    expect(game.totalScore()).toEqual(9)
    expect(game.frameNum()).toEqual(2)
  });

  it ("should have a total of 15 and be in the second frame after rolls of 7, 2, 6", function() {
    game.roll(7,2, 6)
    expect(game.totalScore()).toEqual(15)
    expect(game.frameNum()).toEqual(2)
  });

  it ("should move onto the second frame if a strike is scored", function() {
    game.roll(10)
    expect(game.frameNum()).toEqual(2)
    expect(game.totalScore()).toEqual(10)
  });

  it ("should add extra points from first roll after strike", function() {
    game.roll(10,9)
    expect(game.frameNum()).toEqual(2)
    expect(game.totalScore()).toEqual(28)
  });

  it ("should add extra points from two rolls after strike", function() {
    game.roll(10, 5,4)
    expect(game.frameNum()).toEqual(3)
    expect(game.totalScore()).toEqual(28)
  });

  it ("should add extra points 1 roll after spare", function() {
    game.roll(5,5, 3,2)
    expect(game.frameNum()).toEqual(3)
    expect(game.totalScore()).toEqual(18)
  });

  it ("should give correct score for strike, strike, spare, 3,2", function() {
    game.roll(10, 10, 5,5, 3,2)
    expect(game.frameNum()).toEqual(5)
    expect(game.totalScore()).toEqual(63)
  });

  it ("should give correct score for full game, with no strike or spare in the last frame. end of game to be true", function() {
    game.roll(10, 10, 5,5, 3,2, 7,3, 10, 3,2, 4,6, 10, 3,3)
    expect(game.frameNum()).toEqual(10)
    expect(game.totalScore()).toEqual(145)
    expect(game.isEnd).toEqual(true)
  });

  it ("should throw an error if trying to roll when the game has finished", function() {
    expect(function() {game.roll(10, 10, 5,5, 3,2, 7,3, 10, 3,2, 4,6, 10, 3,3, 5)}).toThrowError("Cannot roll, the game has ended, total Points: 145")
  });

  it ("should allow 2 extra rolls if a strike is scored in the final frame", function() {
    // roll 10 strikes followed by an additional roll of 5
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5)
    expect(function() {game.roll(5)}).not.toThrowError() 
  });

  it ("should throw an error if a third extra roll is attempted after a strike in the final frame", function() {
    // roll 10 strikes followed by two additional rolls of 5
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5,5)
    expect(function() {game.roll(5)}).toThrowError()
  });

  it ("should have a current score of 270 after 10 strikes in a row", function() {
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 10)
    expect(game.totalScore()).toEqual(270)  
  });

  it ("should have a current score of 290 after 11 strikes in a row", function() {
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10)
    expect(game.totalScore()).toEqual(290)  
  });

  it ("should have a score of 300 after 12 strikes in a row. end of game should be true", function() {
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10)
    expect(game.totalScore()).toEqual(300)
    expect(game.isEnd).toEqual(true)
  });

  it ("should allow for an extra roll if a spare is rolled in the final frame", function() {
    // roll 9 strikes and a spare
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 5,5)
    expect(function() {game.roll(5)}).not.toThrowError()
  });

  it ("should throw an error if a second extra roll is attempted after a spare in the final frame", function() {
    // roll 9 strikes and a spare and extra roll
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 5,5, 5)
    expect(function() {game.roll(5)}).toThrowError()
  });

  it ("should calculate the correct score, inclding extras, when a spare is scored in the final frame. end of game should be true", function() {
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 5,5, 5)
    expect(game.totalScore()).toEqual(270)
    expect(game.isEnd).toEqual(true)
  });

  describe(".totalScore", function() {
    it ("should calculate the score of all frames if no argument is given", function() {
      game.roll(5,4, 3,2, 7,1, 3,2)
      expect(game.totalScore()).toEqual(27)
    });

    it ("should calculate the score up to a specific frame if an argument is given", function() {
      game.roll(5,4, 3,2, 7,1, 3,2)
      expect(game.totalScore(1)).toEqual(9)
      expect(game.totalScore(2)).toEqual(14)
      expect(game.totalScore(3)).toEqual(22)
    }); 
  });



});
