/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
describe('A game', function () {
  let game;

  beforeEach(function () {
    game = new Game();
  });

  it('calculates a gutter-game', function () {
    for (i = 0; i < 10; i++) {
      game.roll([0, 0]);
    };
    expect(game.score()).toEqual(0);
  });
});
