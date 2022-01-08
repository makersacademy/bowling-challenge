const Game = require('../lib/game');

describe('Game class', () => {

  beforeEach(() => {
    game = new Game;
  });

  it('create an instance of Game', () => {
    expect(game).toBeInstanceOf(Game);
  });

  it('initialize with an empty array', () => {
    expect(game.frames).toEqual([]);
  })

  describe('addRolls', () => {
    it('add the rolls to the frames array', () => {
      game.addRolls(1, 4);
      expect(game.frames).toEqual([[1, 4]])
    })
  })
});