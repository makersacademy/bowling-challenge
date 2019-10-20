const Bowling = require('../lib/Bowling.js');

describe('Bowling', () => {
  let game;

  beforeEach(() => {
    game = new Bowling();
  });

  it('Initial score is 0', () => {
    expect(game.getCurrentScore()).toEqual(0);
  });

  it('Game has frames', () => {
    expect(game.frames).toEqual([]);
  });

  it('Player rolls first time and score changes', () => {
    game.roll(5);

    expect(game.getCurrentScore()).toEqual(5);
  });
});
