describe('gutter game (20 rolls of 0)', function() {
  it('should show score of 0 after 20 rolls of 0', function() {
    game = new Game
    for (i = 1; i <= 20; i++){
      game.roll(0);
    };
    expect(game.score()).toEqual(0);
  })
  it('should show game is complete after these 20 rolls of 0', function() {
    game = new Game
    for (i = 1; i <= 21; i++){
      game.roll(0);
    };
    expect(game.isInPlay).toEqual(false);
  })
});
