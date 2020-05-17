'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('score starts at 0', function() {
    expect(game.calculateCurrentScore()).toEqual(0)
  });

// only calculate score at end
  it ('gives a total score of 20 when just rolling 1s', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([1, 1])};
    game.addLastFrame([1, 1]);
    expect(game.frames).toEqual([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

    expect(game.calculateCurrentScore()).toEqual(20);
  });


  it ('gives a total score of 0 when had a gutter game', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([0, 0])};
    game.addLastFrame([0, 0]);

    expect(game.calculateCurrentScore()).toEqual(0);
  });


  it ('gives a total score of 40 when just rolling 2s', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([2, 2])};
    game.addLastFrame([2, 2]);

    expect(game.calculateCurrentScore()).toEqual(40);
  });

  it ('gives a total score of 80 when just rolling 4s', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([4, 4])};
    game.addLastFrame([4, 4]);

    expect(game.calculateCurrentScore()).toEqual(80);
  });


  it ('gives a total score of 150 when just rolling 5s', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([5, 5])};
    game.addLastFrame([5, 5, 5]);

    expect(game.calculateCurrentScore()).toEqual(150);
  });


  it ('gives a total score of 300 when just rolling 10s', function() {
    for (let i = 0; i < 9; i ++) {game.addFrame([10, 0])};
    game.addLastFrame([10, 10, 10]);

    expect(game.calculateCurrentScore()).toEqual(300);
  });


  it ('gives a total score of 114 when rolling 5s then 4s', function() {
    for (let i = 0; i < 5; i ++) {game.addFrame([5, 5])};
    for (let i = 5; i < 9; i ++) {game.addFrame([4, 4])};
    game.addLastFrame([4, 4]);

    expect(game.calculateCurrentScore()).toEqual(114);
  });

  it ('gives a total score of 159 when rolling 10s then 3s', function() {
    for (let i = 0; i < 5; i ++) {game.addFrame([10, 0])};
    for (let i = 5; i < 9; i ++) {game.addFrame([3, 3])};
    game.addLastFrame([3, 3]);

    expect(game.calculateCurrentScore()).toEqual(159);
  });


  it ('gives a total score of 123 when rolling 5s, 10s, then 3s', function() {
    for (let i = 0; i < 3; i ++) {game.addFrame([5, 5])};
    for (let i = 3; i < 6; i ++) {game.addFrame([10, 0])};
    for (let i = 6; i < 9; i ++) {game.addFrame([3, 3])};
    game.addLastFrame([3, 3]);

    expect(game.calculateCurrentScore()).toEqual(143);
  });

});
