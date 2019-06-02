/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
describe('A game', function () {
  let game;

  beforeEach(function () {
    game = new Game();
  });

  it('calculates a gutter-game', function () {
    generatesFrames([0, 0]);
    expect(game.score()).toEqual(0);
  });

  it('calculates a standard game', function () {
    generatesFrames([3, 2]);
    expect(game.score()).toEqual(50);
  });

  it('calculates a spare game', function () {
    generatesFrames([5, 5], [5, 5, 5]);
    expect(game.score()).toEqual(150);
  });

  function generatesFrames (frame, finalFrame) {
    for (i = 0; i < 9; i++) {
      game.roll(frame);
    }

    game.roll(finalFrame || frame);
  }
});
