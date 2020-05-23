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

});
