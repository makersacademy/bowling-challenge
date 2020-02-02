describe('Game with all gutter bowls',function(){
  it('should return 0 for a game of all zeros',function(){
    game = new BowlingGame();

    for (var loopcounter = 0; loopcounter < 20; loopcounter++){
      game.roll(0);
    }
    expect(game.score).toEqual(0)
  })})