describe('BowlingGame', function() {

  it('should be able to give score for Frame with 0 score', function() {
    var game = new BowlingGame
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

});
