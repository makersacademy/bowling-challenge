describe('Game', () => {

  it('is initialized with a score of zero', () => {
    game = new Game();
    expect(game.score).toEqual(0);
  });

});
