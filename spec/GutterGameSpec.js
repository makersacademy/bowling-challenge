describe ('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  it('score starts at 0', function() {
    expect(game.score).toBe(0)
  });

  it('is a gutter game if score at end = 0', function() {
    game.score = 0
    game.frame = 10
    expect(game.finalScore).toBe('Your total score is 0- GUTTER GAME!')
  });

});