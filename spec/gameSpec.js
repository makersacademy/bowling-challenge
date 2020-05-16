'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('score starts at 0', function() {
    expect(game.totalScore).toEqual(0)
  });

// only calculate score at end
  it ('gives a total score of 20 when just rolling 1s', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([1, 1])};
    game.addLastFrame([1, 1]);
    expect(game.frames).toEqual([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

    game.calculateTotalScore();
    expect(game.totalScore).toEqual(20);
  });


  it ('gives a total score of 0 when had a gutter game', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([0, 0])};
    game.addLastFrame([0, 0]);

    game.calculateTotalScore();
    expect(game.totalScore).toEqual(0);
  });


  it ('gives a total score of 40 when just rolling 2s', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([2, 2])};
    game.addLastFrame([2, 2]);

    game.calculateTotalScore();
    expect(game.totalScore).toEqual(40);
  });

  it ('gives a total score of 80 when just rolling 4s', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([4, 4])};
    game.addLastFrame([4, 4]);

    game.calculateTotalScore();
    expect(game.totalScore).toEqual(80);
  });

});
