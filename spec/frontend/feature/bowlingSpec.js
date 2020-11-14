describe('bowling', () => {
  let Game = require('../../../app/public/js/Game');
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('records rolls and provides a total score', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(2);
    }
    expect(game.getScore()).toEqual(40);
  });

  it('adds scoring bonuses for spares', () => {
    for (let i = 0; i < 21; i++) {
      game.roll(5);
    }
    expect(game.getScore()).toEqual(150);
  });

  it('adds scoring bonuses for strikes', () => {
    for (let i = 0; i < 12; i++) {
      game.roll(10);
    }
    expect(game.getScore()).toEqual(300);
  });
});
