/* eslint-disable no-undef */
// spec/bowlingGame.js

describe('Bowling Game', function () {
  beforeEach(function () {
    var game = new BowlingGame();
  });

  it('can roll a gutter game', function () {
    var game = new BowlingGame();

    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });
});
