const Game = require('../src/Game');

describe('', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('initially', () => {
    it('has a maximum frame amount', () => {
      expect(game.maxFrames).toEqual(10);
    });
  });
});
