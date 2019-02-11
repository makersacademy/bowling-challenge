/* eslint-disable no-undef */
// spec/bowlingGame.js

describe('Bowling Game', function () {
  var game;
  beforeEach(function () {
    game = new BowlingGame();
  });

  it('can roll a gutter game', function () {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

  it('can roll a full game', function () {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toBe(20);
  });
});
