describe('BowlingGutterGame', function() {
  
  var game = new Game;

  it('Gutter Game has score 0 and finishes in the 10th frame', function() {
    for (i = 0; i <= 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0)
    expect(game.frame).toEqual(10)
  });
});

