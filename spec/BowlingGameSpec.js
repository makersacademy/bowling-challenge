'use strict';

describe ('BowlingGame', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('starts at 0 points', function() {
    expect(game.score).toEqual(0);
  });

  it('starts on frame 1', function() {
    expect(game.frame).toEqual(1);
  });

  it('pushes 2 rolls to a frame', function() {
    game.inputRoll(1);
    game.inputRoll(2);
    expect(game.allRolls).toEqual([[1, 2]])
  });

  it('pushes 4 rolls to a frame', function() {
    game.inputRoll(1);
    game.inputRoll(2);
    game.inputRoll(4);
    game.inputRoll(5);
    expect(game.allRolls).toEqual([[1, 2], [4, 5]])
  });

  it('pushes a single roll if its a strike to a frame', function() {
    game.inputRoll(1);
    game.inputRoll(2);
    game.inputRoll(10);
    game.inputRoll(5);
    game.inputRoll(2);
    expect(game.allRolls).toEqual([[1, 2], [10], [5, 2]])
  });

  it('adds 1 to bonus roll when there is a spare', function() {
    game.inputRoll(5);
    game.inputRoll(5);
    expect(game.bonusRoll).toEqual(1);
  });

  it('adds 2 to bonus roll when there is a strike', function() {
    game.inputRoll(10);
    expect(game.bonusRoll).toEqual(2);
  });


});
