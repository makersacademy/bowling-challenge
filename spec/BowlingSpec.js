var Bowling = require('../src/bowling.js');

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
    expect(game.frameNum()).toEqual(11)
    expect(game.totalScore()).toEqual(145)
    expect(game.isEnd).toEqual(true)
  });

  it ("should give correct score for full game without any strikes and the game to end", function() {
    expect(function() {game.roll(10, 10, 5,5, 3,2, 7,3, 10, 3,2, 4,6, 10, 3,3, 5)}).toThrowError("Cannot roll, the game has ended, total Points: 145")
  });

  it ("should give correct score for perfect game", function() {
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10)
    expect(game.totalScore()).toEqual(300)  
  });


});
