/* eslint-disable no-undef */
// spec/bowlingGame.js

describe('Bowling Game', function () {
  var rollMultiple = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  var game;
  beforeEach(function () {
    game = new BowlingGame();
  });

  it('can roll a gutter game', function () {
    rollMultiple(0, 20);
    expect(game.score()).toBe(0);
  });

  it('can roll a full game of 1', function () {
    rollMultiple(1, 20);
    expect(game.score()).toBe(20);
  });
  // it('can roll a spare ball', function () {
  //   game.roll(7);
  //   game.roll(3);
  //   game.roll(6);
  //   rollMultiple(0, 17);
  //   expect(game.score()).toBe(22);
  // });
});
