'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('score starts at 0', function() {
    expect(game.totalScore).toEqual(0)
  });

  it ('can add 5 to the total score', function() {
    game.addScore(5);
    expect(game.totalScore).toEqual(5)
  });

// only calculate score at end
  it ('gives a total score of 20 when just rolling 1s', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([1, 1])};
    game.addLastFrame([1, 1]);
    expect(game.frames).toEqual([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])
    game.calculateTotalScore()
    expect(game.totalScore).toEqual(20)
  });

});
