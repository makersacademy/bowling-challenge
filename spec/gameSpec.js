/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
describe('A game', function () {
  let game;

  beforeEach(function () {
    game = new Game();
  });

  it('calculates a gutter-game', function () {
    generateFrames([0, 0]);
    expect(game.score()).toEqual(0);
  });

  it('calculates a standard game', function () {
    generateFrames([3, 2]);
    expect(game.score()).toEqual(50);
  });

  it('calculates a spare game', function () {
    generateFrames([5, 5], [5, 5, 5]);
    expect(game.score()).toEqual(150);
  });

  it('calculates a perfect game - all strikes', function () {
    generateFrames([10], [10, 10, 10]);
    expect(game.score()).toEqual(300);
  });

  function generateFrames (frame, finalFrame) {
    for (i = 0; i < 9; i++) {
      game.roll(frame);
    }

    game.roll(finalFrame || frame);
  }
});
