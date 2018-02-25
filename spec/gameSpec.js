describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('#initialize', () => {
    it('it initializes a game with no frames', () => {
      expect(game.frames).toEqual([]);
    });
  });
});
