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

});
