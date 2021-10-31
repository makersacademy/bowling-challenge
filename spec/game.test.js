const Game = require('../src/game')

beforeEach(() => {
  game = new Game();
});

describe('Game', () => {
  it('has an empty array of frames', () => {
    expect(game.frames).toEqual([]);
  })
})

