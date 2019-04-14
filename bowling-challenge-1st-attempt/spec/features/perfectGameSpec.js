describe('perfect game (12 strikes)', function() {
  it('should show score of 300 after 12 rolls of 10', function() {
    game = new Game
    for (i = 1; i <= 12; i++){
      game.roll(10);
    };
    expect(game.totalScore()).toEqual(300);
  })
  it('should show game is complete after these 12 rolls of 10', function() {
    game = new Game
    for (i = 1; i <= 12; i++){
      game.roll(10);
    };
    expect(game.isInPlay).toEqual(false);
  })
});
