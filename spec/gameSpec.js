'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('score starts at 0 points', function () {
    expect(game.calculateCurrentScore()).toEqual(0);
  });

  it('returns a final score of 0 when rolling a gutter game', function() {
    for (let i = 1; i <= 9; i += 1) {
      game.addFrame([0, 0]);
    }
    game.addLastFrame([0, 0]);

    expect(game.frames.length).toEqual(10);
    expect(game.calculateCurrentScore()).toEqual(0);
  });

  it('returns a final score of 20 when rolling all 1s', function() {
    for (let i = 1; i <= 9; i += 1) {
      game.addFrame([1, 1]);
    }
    game.addLastFrame([1, 1]);

    expect(game.calculateCurrentScore()).toEqual(20);
  });

  it('returns a final score of 40 when rolling all 2s', function() {
    for (let i = 1; i <= 9; i += 1) {
      game.addFrame([2, 2]);
    }
    game.addLastFrame([2, 2]);

    expect(game.calculateCurrentScore()).toEqual(40);
  });

  it('returns a final score of 60 when rolling all 3s', function() {
    for (let i = 1; i <= 9; i += 1) {
      game.addFrame([3, 3]);
    }
    game.addLastFrame([3, 3]);

    expect(game.calculateCurrentScore()).toEqual(60);
  });

  it('returns a final score of 80 when rolling all 4s', function() {
    for (let i = 1; i <= 9; i += 1) {
      game.addFrame([4, 4]);
    }
    game.addLastFrame([4, 4]);

    expect(game.calculateCurrentScore()).toEqual(80);
  });

  it('returns a final score of 150 when rolling all 5s', function() {
    for (let i = 1; i <= 9; i += 1) {
      game.addFrame([5, 5]);
    }
    game.addLastFrame([5, 5, 5]);

    expect(game.calculateCurrentScore()).toEqual(150);
  });

  it('returns a running total of 60 when rolling 5 frames of 5s', function() {
    for (let i = 1; i <= 5; i += 1) {
      game.addFrame([5, 5]);
    }

    expect(game.calculateCurrentScore()).toEqual(60);
  });



});
